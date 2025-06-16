import 'dart:typed_data';

import 'package:dartcoin_org/helper.dart';
import 'package:flutter/material.dart';

import 'package:dartcoin/dartcoin.dart';

import 'backimg.dart';

class Bech32Page extends StatefulWidget {
  const Bech32Page({super.key});

  @override
  State<Bech32Page> createState() => _Bech32PageState();
}

class _Bech32PageState extends State<Bech32Page> {
  final _encodeController = TextEditingController();
  final _decodeController = TextEditingController();
  Network _network = Network.mainnet;
  int _version = 0;
  String _encodeError = '';
  String _decodeError = '';

  void _encodeToBech32() {
    try {
      // Convert hex string to bytes
      final hex = _encodeController.text.replaceAll(' ', '');
      if (hex.isEmpty) {
        setState(() {
          _encodeError = 'Error: Input cannot be empty';
        });
        return;
      }
      setState(() {
        _encodeError = '';
        _decodeError = '';
        final bytes = hexToBytes(hex);
        final scriptPubKey = Uint8List.fromList([
          _version == 0 ? 0 : _version + 0x50, // map to OP_0, OP_1 etc
          bytes.length,
          ...bytes,
        ]);
        final result = bech32Encode(
          scriptPubKey,
          network: _network,
        ); // Pass version
        _decodeController.text = result;
        snackbar(context, 'Encoded ${bytes.length} bytes to Bech32: $result');
      });
    } catch (e) {
      setState(() {
        _encodeError = 'Error: ${e.toString()}';
      });
    }
  }

  void _decodeFromBech32() {
    try {
      setState(() {
        _encodeError = '';
        _decodeError = '';
        final bech32 = bech32Decode(_decodeController.text);
        final payload = bech32.scriptPubKey.sublist(
          2,
        ); // Skip the version and length bytes
        final result = bytesToHex(payload);
        _encodeController.text = result;
        snackbar(context, 'Decoded ${payload.length} bytes to: $result');
        // Update the version based on the first byte
        _version = bech32.scriptPubKey[0] == 0
            ? 0
            : bech32.scriptPubKey[0] - 0x50; // map back to 0, 1, 2
        // Update the network based on the prefix
        _network = bech32.network;
      });
    } catch (e) {
      setState(() {
        _decodeError = 'Error: ${e.toString()}';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Bech32 Encoder/Decoder')),
      body: BackImg(
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Encode panel
                Card(
                  elevation: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Encode to Bech32',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Text('Network:'),
                            const SizedBox(width: 8),
                            DropdownButton<Network>(
                              value: _network,
                              items: [
                                DropdownMenuItem(
                                  value: Network.mainnet,
                                  child: const Text('mainnet'),
                                ),
                                DropdownMenuItem(
                                  value: Network.testnet,
                                  child: const Text('testnet'),
                                ),
                                DropdownMenuItem(
                                  value: Network.regtest,
                                  child: const Text('regtest'),
                                ),
                              ],
                              onChanged: (v) => setState(() => _network = v!),
                            ),
                            const SizedBox(width: 24),
                            const Text('Script Version:'),
                            const SizedBox(width: 8),
                            DropdownButton<int>(
                              value: _version,
                              items: List.generate(
                                3,
                                (i) => DropdownMenuItem(
                                  value: i,
                                  child: Text(i.toString()),
                                ),
                              ),
                              onChanged: (v) => setState(() => _version = v!),
                            ),
                          ],
                        ),
                        Text(
                          'Note: Version 0 scripts should be 20 or 32 bytes long. Version 1 scripts should be 32 bytes long.',
                          style: TextStyle(
                            fontSize: 12,
                            color: Theme.of(
                              context,
                            ).colorScheme.onSurface.withAlpha(128),
                          ),
                        ),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _encodeController,
                          decoration: const InputDecoration(
                            labelText: 'Input (Hex String)',
                          ),
                          minLines: 3,
                          maxLines: null, // Allow unlimited lines
                        ),
                        const SizedBox(height: 8),
                        ElevatedButton.icon(
                          onPressed: _encodeToBech32,
                          icon: const Icon(Icons.arrow_downward),
                          label: const Text('Convert to Bech32'),
                        ),
                        const SizedBox(height: 8),
                        SelectableText(
                          _encodeError,
                          style: TextStyle(
                            fontFamily: 'monospace',
                            fontSize: 16,
                            color: _encodeError.startsWith('Error:')
                                ? Colors.red
                                : null,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                // Decode panel
                Card(
                  elevation: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Decode from Bech32',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 8),
                        TextField(
                          controller: _decodeController,
                          decoration: const InputDecoration(
                            labelText: 'Bech32 String',
                          ),
                          minLines: 3,
                          maxLines: null, // Allow unlimited lines
                        ),
                        const SizedBox(height: 8),
                        ElevatedButton.icon(
                          onPressed: _decodeFromBech32,
                          icon: const Icon(Icons.arrow_upward),
                          label: const Text('Convert from Bech32'),
                        ),
                        const SizedBox(height: 8),
                        SelectableText(
                          _decodeError,
                          style: TextStyle(
                            fontFamily: 'monospace',
                            fontSize: 16,
                            color: _decodeError.startsWith('Error:')
                                ? Colors.red
                                : null,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
