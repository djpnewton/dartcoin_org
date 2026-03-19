import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;

import 'package:dartcoin/dartcoin.dart';

enum ExplorerNetwork {
  mainnet,
  testnet3,
  testnet4;

  String get label => switch (this) {
    ExplorerNetwork.mainnet => 'Mainnet',
    ExplorerNetwork.testnet3 => 'Testnet3',
    ExplorerNetwork.testnet4 => 'Testnet4',
  };

  String get apiBase => switch (this) {
    ExplorerNetwork.mainnet => 'https://mempool.space/api',
    ExplorerNetwork.testnet3 => 'https://mempool.space/testnet/api',
    ExplorerNetwork.testnet4 => 'https://mempool.space/testnet4/api',
  };
}

enum _InputType { hash, blockHeight, unknown }

_InputType _detectInputType(String value) {
  if (value.isEmpty) return _InputType.unknown;
  if (RegExp(r'^\d+$').hasMatch(value)) return _InputType.blockHeight;
  if (RegExp(r'^[0-9a-fA-F]{64}$').hasMatch(value)) return _InputType.hash;
  return _InputType.unknown;
}

enum _ResultKind { tx, block }

class _BlockDetails {
  final String id;
  final int height;
  final int version;
  final int timestamp;
  final int txCount;
  final int size;
  final int weight;
  final String merkleRoot;
  final String previousBlockHash;
  final int nonce;
  final int bits;
  final double difficulty;
  final List<Transaction> transactions;

  const _BlockDetails({
    required this.id,
    required this.height,
    required this.version,
    required this.timestamp,
    required this.txCount,
    required this.size,
    required this.weight,
    required this.merkleRoot,
    required this.previousBlockHash,
    required this.nonce,
    required this.bits,
    required this.difficulty,
    required this.transactions,
  });
}

class BlockchainSearch extends StatefulWidget {
  const BlockchainSearch({super.key});

  @override
  State<BlockchainSearch> createState() => _BlockchainSearchState();
}

class _BlockchainSearchState extends State<BlockchainSearch> {
  final _controller = TextEditingController();
  ExplorerNetwork _network = ExplorerNetwork.mainnet;

  bool _loading = false;
  String? _errorText;

  _ResultKind? _resultKind;
  String? _txHex; // when _resultKind == tx
  _BlockDetails? _blockDetails; // when _resultKind == block
  Transaction? _parsedTx;
  BlockHeader? _parsedHeader;

  Future<void> _search() async {
    final input = _controller.text.trim();
    if (input.isEmpty) {
      setState(() {
        _errorText = 'Enter a transaction ID, block hash, or block height';
        _clearResult();
      });
      return;
    }

    final type = _detectInputType(input);
    if (type == _InputType.unknown) {
      setState(() {
        _errorText =
            'Invalid input. Enter a 64-char hex hash or a block height.';
        _clearResult();
      });
      return;
    }

    setState(() {
      _loading = true;
      _errorText = null;
      _clearResult();
    });

    try {
      final base = _network.apiBase;
      String? blockHash;

      if (type == _InputType.blockHeight) {
        final resp = await http.get(Uri.parse('$base/block-height/$input'));
        if (resp.statusCode != 200) {
          throw 'Block height not found (${resp.statusCode})';
        }
        blockHash = resp.body.trim();
      } else {
        // 64-char hex — try tx first
        final txResp = await http.get(Uri.parse('$base/tx/$input/hex'));
        if (txResp.statusCode == 200) {
          final hex = txResp.body.trim();
          Transaction? parsed;
          try {
            parsed = Transaction.fromBytes(hexToBytes(hex));
          } catch (_) {}
          setState(() {
            _resultKind = _ResultKind.tx;
            _txHex = hex;
            _parsedTx = parsed;
          });
          return;
        }
        // Fall back: treat as block hash
        blockHash = input;
      }

      // Fetch block JSON metadata and raw binary in parallel
      final results = await Future.wait([
        http.get(Uri.parse('$base/block/$blockHash')),
        http.get(Uri.parse('$base/block/$blockHash/raw')),
      ]);

      final blockResp = results[0];
      final rawResp = results[1];

      if (blockResp.statusCode != 200) {
        throw 'Not found as transaction or block (${blockResp.statusCode})';
      }
      if (rawResp.statusCode != 200) {
        throw 'Failed to fetch raw block data (${rawResp.statusCode})';
      }

      final j = jsonDecode(blockResp.body) as Map<String, dynamic>;
      final block = Block.fromBytes(rawResp.bodyBytes);

      setState(() {
        _resultKind = _ResultKind.block;
        _blockDetails = _BlockDetails(
          id: j['id'] as String,
          height: j['height'] as int,
          version: j['version'] as int,
          timestamp: j['timestamp'] as int,
          txCount: j['tx_count'] as int,
          size: j['size'] as int,
          weight: j['weight'] as int,
          merkleRoot: j['merkle_root'] as String,
          previousBlockHash: j['previousblockhash'] as String? ?? '',
          nonce: j['nonce'] as int,
          bits: j['bits'] as int,
          difficulty: (j['difficulty'] as num).toDouble(),
          transactions: block.transactions,
        );
        _parsedHeader = block.header;
      });
    } catch (e) {
      setState(() => _errorText = e.toString());
    } finally {
      setState(() => _loading = false);
    }
  }

  void _clearResult() {
    _resultKind = null;
    _txHex = null;
    _blockDetails = null;
    _parsedTx = null;
    _parsedHeader = null;
  }

  String _hintLabel(String value) {
    switch (_detectInputType(value)) {
      case _InputType.hash:
        return 'Transaction ID or block hash detected';
      case _InputType.blockHeight:
        return 'Block height detected';
      default:
        return '';
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            // ── Header row ──────────────────────────────────────────────────
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Search Transaction / Block',
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                DropdownButton<ExplorerNetwork>(
                  value: _network,
                  isDense: true,
                  underline: const SizedBox.shrink(),
                  items: ExplorerNetwork.values
                      .map(
                        (n) => DropdownMenuItem(
                          value: n,
                          child: Text(
                            n.label,
                            style: Theme.of(context).textTheme.bodySmall,
                          ),
                        ),
                      )
                      .toList(),
                  onChanged: (n) {
                    if (n != null) {
                      setState(() {
                        _network = n;
                        _errorText = null;
                        _clearResult();
                      });
                    }
                  },
                ),
              ],
            ),
            const SizedBox(height: 12),

            // ── Input row ───────────────────────────────────────────────────
            ValueListenableBuilder<TextEditingValue>(
              valueListenable: _controller,
              builder: (context, value, _) {
                final hint = _hintLabel(value.text);
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Expanded(
                          child: TextField(
                            controller: _controller,
                            decoration: InputDecoration(
                              border: const OutlineInputBorder(),
                              hintText: 'TX ID, block hash, or block height',
                              errorText: _errorText,
                              isDense: true,
                            ),
                            onSubmitted: (_) => _search(),
                          ),
                        ),
                        const SizedBox(width: 8),
                        SizedBox(
                          height: 48,
                          child: ElevatedButton.icon(
                            onPressed: _loading ? null : _search,
                            icon: _loading
                                ? const SizedBox(
                                    width: 14,
                                    height: 14,
                                    child: CircularProgressIndicator(
                                      strokeWidth: 2,
                                    ),
                                  )
                                : const Icon(Icons.search, size: 18),
                            label: const Text('Search'),
                          ),
                        ),
                      ],
                    ),
                    if (hint.isNotEmpty) ...[
                      const SizedBox(height: 4),
                      Text(
                        hint,
                        style: Theme.of(context).textTheme.bodySmall?.copyWith(
                          color: Theme.of(context).colorScheme.primary,
                        ),
                      ),
                    ],
                  ],
                );
              },
            ),

            // ── Results ─────────────────────────────────────────────────────
            if (_resultKind == _ResultKind.tx && _txHex != null) ...[
              const SizedBox(height: 16),
              if (_parsedTx != null)
                _ParsedTxView(tx: _parsedTx!, hex: _txHex!)
              else
                _HexBox(label: 'Transaction hex', hex: _txHex!),
            ],

            if (_resultKind == _ResultKind.block && _blockDetails != null) ...[
              const SizedBox(height: 16),
              _BlockView(
                details: _blockDetails!,
                parsedHeader: _parsedHeader,
                onTxTap: (tx) => setState(() {
                  _resultKind = _ResultKind.tx;
                  _parsedTx = tx;
                  _txHex = tx.toBytes().toHex();
                  _blockDetails = null;
                  _parsedHeader = null;
                }),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

// ── Reusable hex display ──────────────────────────────────────────────────────

class _HexBox extends StatelessWidget {
  const _HexBox({required this.label, required this.hex});

  final String label;
  final String hex;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(label, style: Theme.of(context).textTheme.labelMedium),
            IconButton(
              tooltip: 'Copy hex',
              icon: const Icon(Icons.copy, size: 16),
              onPressed: () {
                Clipboard.setData(ClipboardData(text: hex));
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(
                    content: Text('Hex copied to clipboard'),
                    duration: Duration(seconds: 2),
                  ),
                );
              },
            ),
          ],
        ),
        const SizedBox(height: 4),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: Theme.of(context).colorScheme.surfaceContainerHighest,
            borderRadius: BorderRadius.circular(6),
          ),
          child: SelectableText(
            hex,
            style: Theme.of(context).textTheme.bodySmall?.copyWith(
              fontFamily: 'monospace',
              fontSize: 11,
            ),
          ),
        ),
      ],
    );
  }
}

// ── Block details view ────────────────────────────────────────────────────────

class _BlockView extends StatelessWidget {
  const _BlockView({required this.details, this.parsedHeader, this.onTxTap});

  final _BlockDetails details;
  final BlockHeader? parsedHeader;
  final void Function(Transaction tx)? onTxTap;

  @override
  Widget build(BuildContext context) {
    final ph = parsedHeader;
    final ts = ph?.time ?? details.timestamp;
    final dt = DateTime.fromMillisecondsSinceEpoch(ts * 1000, isUtc: true);
    final tsStr =
        '${dt.year}-${dt.month.toString().padLeft(2, '0')}-${dt.day.toString().padLeft(2, '0')} '
        '${dt.hour.toString().padLeft(2, '0')}:${dt.minute.toString().padLeft(2, '0')}:${dt.second.toString().padLeft(2, '0')} UTC';

    final headerFields = <_Field>[
      if (ph != null) ...[
        _Field('Hash', ph.hashNice()),
        _Field('Version', '0x${ph.version.toRadixString(16)}'),
        _Field('Timestamp', tsStr),
        _Field('Bits', '0x${ph.nBits.toRadixString(16)}'),
        _Field(
          'Target',
          '0x${BlockHeader.bitsToTarget(ph.nBits).toRadixString(16).padLeft(64, '0')}',
        ),
        _Field('Nonce', '${ph.nonce}'),
        _Field('Merkle root', ph.merkleRootHash.reverse().toHex()),
        _Field('Prev block', ph.previousBlockHeaderHash.reverse().toHex()),
      ] else ...[
        _Field('Hash', details.id),
        _Field('Version', '0x${details.version.toRadixString(16)}'),
        _Field('Timestamp', tsStr),
        _Field('Bits', '0x${details.bits.toRadixString(16)}'),
        _Field('Nonce', '${details.nonce}'),
        _Field('Merkle root', details.merkleRoot),
        _Field('Prev block', details.previousBlockHash),
      ],
      _Field('Height', '${details.height}'),
      _Field('Difficulty', details.difficulty.toStringAsFixed(2)),
      _Field('Size', '${details.size} bytes'),
      _Field('Weight', '${details.weight} wu'),
      _Field('TX count', '${details.txCount}'),
    ];

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Text('Block Header', style: Theme.of(context).textTheme.titleSmall),
          ],
        ),
        const SizedBox(height: 8),
        _FieldGrid(fields: headerFields),

        if (parsedHeader != null) ...[
          const SizedBox(height: 12),
          _HexBox(
            label: 'Header hex (80 bytes)',
            hex: parsedHeader!.toBytes().toHex(),
          ),
        ],

        if (details.transactions.isNotEmpty) ...[
          const SizedBox(height: 16),
          Text(
            'Transactions (${details.transactions.length})',
            style: Theme.of(context).textTheme.titleSmall,
          ),
          const SizedBox(height: 6),
          ListView.separated(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemCount: details.transactions.length,
            separatorBuilder: (_, __) => const Divider(height: 1),
            itemBuilder: (context, i) => _TxidRow(
              index: i,
              txid: details.transactions[i].txid(),
              onTap: onTxTap != null
                  ? () => onTxTap!(details.transactions[i])
                  : null,
            ),
          ),
        ],
      ],
    );
  }
}

// ── Field grid ────────────────────────────────────────────────────────────────

class _Field {
  const _Field(this.name, this.value);
  final String name;
  final String value;
}

class _FieldGrid extends StatelessWidget {
  const _FieldGrid({required this.fields});
  final List<_Field> fields;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainerHighest,
        borderRadius: BorderRadius.circular(6),
      ),
      child: Column(
        children: [
          for (var i = 0; i < fields.length; i++) ...[
            if (i > 0) const Divider(height: 1, indent: 8, endIndent: 8),
            _FieldRow(field: fields[i]),
          ],
        ],
      ),
    );
  }
}

class _FieldRow extends StatelessWidget {
  const _FieldRow({required this.field});
  final _Field field;

  @override
  Widget build(BuildContext context) {
    final mono = Theme.of(
      context,
    ).textTheme.bodySmall?.copyWith(fontFamily: 'monospace', fontSize: 11);
    final label = Theme.of(context).textTheme.bodySmall?.copyWith(
      color: Theme.of(context).colorScheme.onSurfaceVariant,
      fontSize: 11,
    );
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(width: 90, child: Text(field.name, style: label)),
          Expanded(child: SelectableText(field.value, style: mono)),
        ],
      ),
    );
  }
}

// ── Txid row ──────────────────────────────────────────────────────────────────

class _TxidRow extends StatelessWidget {
  const _TxidRow({required this.index, required this.txid, this.onTap});
  final int index;
  final String txid;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final mono = Theme.of(
      context,
    ).textTheme.bodySmall?.copyWith(fontFamily: 'monospace', fontSize: 11);
    final linkStyle = mono?.copyWith(
      color: Theme.of(context).colorScheme.primary,
      decoration: TextDecoration.underline,
      decorationColor: Theme.of(context).colorScheme.primary,
    );
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5, horizontal: 4),
      child: Row(
        children: [
          SizedBox(
            width: 40,
            child: Text(
              '$index',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Theme.of(context).colorScheme.onSurfaceVariant,
                fontSize: 11,
              ),
              textAlign: TextAlign.right,
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: onTap != null
                ? InkWell(
                    onTap: onTap,
                    borderRadius: BorderRadius.circular(3),
                    child: Text(txid, style: linkStyle),
                  )
                : SelectableText(txid, style: mono),
          ),
          IconButton(
            icon: const Icon(Icons.copy, size: 14),
            tooltip: 'Copy txid',
            padding: EdgeInsets.zero,
            constraints: const BoxConstraints(minWidth: 28, minHeight: 28),
            onPressed: () {
              Clipboard.setData(ClipboardData(text: txid));
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('TXID copied'),
                  duration: Duration(seconds: 1),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}

// ── Parsed transaction view ───────────────────────────────────────────────────

class _ParsedTxView extends StatelessWidget {
  const _ParsedTxView({required this.tx, required this.hex});

  final Transaction tx;
  final String hex;

  @override
  Widget build(BuildContext context) {
    final isSegwit = tx.type() == TxType.segwit;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Transaction', style: Theme.of(context).textTheme.titleSmall),
        const SizedBox(height: 8),
        _FieldGrid(
          fields: [
            _Field('TXID', tx.txid()),
            if (isSegwit) _Field('WTXID', tx.wtxid()),
            _Field('Version', '${tx.version}'),
            _Field('Locktime', '${tx.locktime}'),
            _Field('Type', isSegwit ? 'Segwit' : 'Legacy'),
            _Field('Inputs', '${tx.inputs.length}'),
            _Field('Outputs', '${tx.outputs.length}'),
          ],
        ),
        const SizedBox(height: 16),
        Text(
          'Inputs (${tx.inputs.length})',
          style: Theme.of(context).textTheme.titleSmall,
        ),
        const SizedBox(height: 6),
        for (var i = 0; i < tx.inputs.length; i++) ...[
          _InputCard(index: i, input: tx.inputs[i]),
          if (i < tx.inputs.length - 1) const SizedBox(height: 6),
        ],
        const SizedBox(height: 16),
        Text(
          'Outputs (${tx.outputs.length})',
          style: Theme.of(context).textTheme.titleSmall,
        ),
        const SizedBox(height: 6),
        for (var i = 0; i < tx.outputs.length; i++) ...[
          _OutputCard(index: i, output: tx.outputs[i]),
          if (i < tx.outputs.length - 1) const SizedBox(height: 6),
        ],
        const SizedBox(height: 12),
        _HexBox(label: 'Raw hex', hex: hex),
      ],
    );
  }
}

// ── Input card ────────────────────────────────────────────────────────────────

class _InputCard extends StatelessWidget {
  const _InputCard({required this.index, required this.input});

  final int index;
  final TxIn input;

  @override
  Widget build(BuildContext context) {
    const coinbaseTxid =
        '0000000000000000000000000000000000000000000000000000000000000000';
    final isCoinbase = input.txid == coinbaseTxid && input.vout == 0xffffffff;

    final fields = <_Field>[
      if (isCoinbase) ...[
        _Field('Type', 'Coinbase'),
        if (input.scriptSig.isNotEmpty)
          _Field('Coinbase data', input.scriptSig.toHex()),
      ] else ...[
        _Field('Prev TX', input.txid),
        _Field('Output idx', '${input.vout}'),
        if (input.scriptSig.isNotEmpty)
          _Field('ScriptSig', input.scriptSig.toHex()),
      ],
      _Field(
        'Sequence',
        '0x${input.sequence.toRadixString(16).padLeft(8, '0')}',
      ),
    ];

    final w = input.witness;
    if (w != null) {
      for (var j = 0; j < w.stackItems.length; j++) {
        final hex = w.stackItems[j].data.toHex();
        fields.add(_Field('Witness[$j]', hex.isEmpty ? '(empty)' : hex));
      }
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Input $index',
          style: Theme.of(context).textTheme.labelMedium?.copyWith(
            color: Theme.of(context).colorScheme.onSurfaceVariant,
          ),
        ),
        const SizedBox(height: 4),
        _FieldGrid(fields: fields),
      ],
    );
  }
}

// ── Output card ───────────────────────────────────────────────────────────────

class _OutputCard extends StatelessWidget {
  const _OutputCard({required this.index, required this.output});

  final int index;
  final TxOut output;

  @override
  Widget build(BuildContext context) {
    final btc = output.value / 100000000;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'Output $index',
          style: Theme.of(context).textTheme.labelMedium?.copyWith(
            color: Theme.of(context).colorScheme.onSurfaceVariant,
          ),
        ),
        const SizedBox(height: 4),
        _FieldGrid(
          fields: [
            _Field(
              'Value',
              '${output.value} sat  (${btc.toStringAsFixed(8)} BTC)',
            ),
            _Field('ScriptPubKey', output.scriptPubKey.toHex()),
          ],
        ),
      ],
    );
  }
}
