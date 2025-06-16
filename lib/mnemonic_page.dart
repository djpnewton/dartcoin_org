import 'package:flutter/material.dart';

import 'package:dartcoin/dartcoin.dart';

import 'helper.dart';
import 'backimg.dart';

class MnemonicPage extends StatefulWidget {
  const MnemonicPage({super.key});

  @override
  State<MnemonicPage> createState() => _MnemonicPageState();
}

class _MnemonicPageState extends State<MnemonicPage>
    with SingleTickerProviderStateMixin {
  final _mnemonicController = TextEditingController();
  String _mnemonic = '';
  String _error = '';
  int _tabIndex = 0;
  int _derivationPathTabIndex = 0;

  // Placeholder values for seed, xprv, xpub
  String _seed = '';
  String _xprv = '';
  String _xpub = '';
  Network _network = Network.testnet;
  int _mnemonicWordCount = 12;

  int _derivationPathPurpose = 44; // Default to BIP 44
  int _derivationPathCoinType = 1; // Default to Bitcoin Testnet
  int _derivationPathAccount = 0; // Default account
  int _derivationPathChange = 0; // Default to no

  void _generateMnemonic() {
    final bits = _mnemonicWordCount == 24 ? 256 : 128;
    final mnemonic = mnemonicFromEntropy(randomBits(bits));
    setState(() {
      _mnemonic = mnemonic;
      _error = '';
      _mnemonicController.text = _mnemonic;
      snackbar(context, 'Generated mnemonic');
      _updateDerived(mnemonic);
    });
  }

  void _mnemonicControllerChanged(String value) {
    setState(() {
      _error = '';
      _mnemonic = '';
      _seed = '';
      _xprv = '';
      _xpub = '';
    });
  }

  void _validateMnemonic() {
    final mnemonic = _mnemonicController.text.trim();
    setState(() {
      if (mnemonic.isNotEmpty && mnemonicValid(mnemonic)) {
        _mnemonic = mnemonic;
        _error = '';
        snackbar(context, 'Valid mnemonic');
        _updateDerived(mnemonic);
      } else {
        _error = 'Error: Invalid mnemonic';
        _mnemonic = '';
        _seed = '';
        _xprv = '';
        _xpub = '';
      }
    });
  }

  void _updateNetwork(Network? network) {
    if (network != null) {
      setState(() {
        _network = network;
        // Update the coin type based on the selected network
        _derivationPathCoinType = _network == Network.mainnet ? 0 : 1; // BIP 44
        _updateDerived(_mnemonic);
      });
    }
  }

  Future<void> _updateDerived(String mnemonic) async {
    _seed = await mnemonicToSeed(mnemonic);
    final masterKey = PrivateKey.fromSeed(hexToBytes(_seed));
    setState(() {
      _seed = _seed;
      _xprv = masterKey.xprv(network: _network);
      _xpub = masterKey.xpub(network: _network);
    });
  }

  void _updateDerivationPathTab(int index) {
    setState(() {
      _derivationPathTabIndex = index;
      // Update the coin type based on the selected tab
      if (index == 0) {
        _derivationPathPurpose = 44; // BIP 44
      } else if (index == 1) {
        _derivationPathPurpose = 49; // BIP 49
      } else if (index == 2) {
        _derivationPathPurpose = 84; // BIP 84
      }
    });
  }

  String _derivationPath({int? index}) {
    if (index != null) {
      return "m/$_derivationPathPurpose'/$_derivationPathCoinType'/$_derivationPathAccount'/$_derivationPathChange/$index";
    }
    return "m/$_derivationPathPurpose'/$_derivationPathCoinType'/$_derivationPathAccount'/$_derivationPathChange";
  }

  Widget _derivationPathUI() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(child: Text('Purpose:')),
            Expanded(
              flex: 4,
              child: TextField(
                controller: TextEditingController(
                  text: _derivationPathPurpose.toString(),
                ),
                readOnly: true,
              ),
            ),
          ],
        ),
        Row(
          children: [
            Expanded(child: Text('Coin:')),
            Expanded(
              flex: 4,
              child: TextField(
                controller: TextEditingController(
                  text: _derivationPathCoinType.toString(),
                ),
                readOnly: true,
              ),
            ),
          ],
        ),
        Row(
          children: [
            Expanded(child: Text('Account:')),
            Expanded(
              flex: 4,
              child: TextField(
                controller: TextEditingController(
                  text: _derivationPathAccount.toString(),
                ),
                onChanged: (value) {
                  setState(() {
                    _derivationPathAccount = int.tryParse(value) ?? 0;
                  });
                },
              ),
            ),
          ],
        ),
        Row(
          children: [
            Expanded(child: Text('Change ("1" for change addresses):')),
            Expanded(
              flex: 4,
              child: TextField(
                controller: TextEditingController(
                  text: _derivationPathChange.toString(),
                ),
                onChanged: (value) {
                  setState(() {
                    _derivationPathChange = int.tryParse(value) ?? 0;
                  });
                },
              ),
            ),
          ],
        ),
        Row(
          children: [
            Expanded(child: Text('BIP 32 Derivation Path:')),
            Expanded(
              flex: 4,
              child: TextField(
                controller: TextEditingController(text: _derivationPath()),
                readOnly: true,
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _derivedAddresses() {
    final masterKey = PrivateKey.fromSeed(hexToBytes(_seed));
    final scriptType = switch (_derivationPathPurpose) {
      44 => ScriptType.p2pkh, // BIP 44
      49 => ScriptType.p2shP2wpkh, // BIP 49
      84 => ScriptType.p2wpkh, // BIP 84
      _ => throw Exception('Unsupported derivation path purpose'),
    };
    final addresses = <(String, String, String, String)>[];
    for (int i = 0; i < 5; i++) {
      final derivationPath = _derivationPath(index: i);
      final childKey = masterKey.childFromDerivationPath(derivationPath);
      final addr = childKey.address(network: _network, scriptType: scriptType);
      final pubKey = bytesToHex(childKey.publicKey);
      final privKey = Wif(_network, childKey.privateKey, true).toWifString();
      addresses.add((derivationPath, addr, pubKey, privKey));
    }

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Row(
          children: [
            Expanded(
              child: Text(
                'Derivation Path:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              flex: 2,
              child: Text(
                'Address:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              flex: 3,
              child: Text(
                'Public Key:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
            Expanded(
              flex: 3,
              child: Text(
                'Private Key:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
        for (var address in addresses)
          Row(
            children: [
              Expanded(
                child: SelectableText(
                  address.$1,
                  style: TextStyle(color: Colors.grey),
                ),
              ), // Derivation Path
              Expanded(flex: 2, child: SelectableText(address.$2)), // Address
              Expanded(
                flex: 3,
                child: SelectableText(
                  address.$3,
                  style: TextStyle(color: Colors.grey),
                ),
              ), // Pubkey
              Expanded(flex: 3, child: SelectableText(address.$4)), // WIF
            ],
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('BIP 39 Mnemonic')),
      body: BackImg(
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(12),
                  margin: const EdgeInsets.all(4),
                  decoration: BoxDecoration(
                    color: Colors.amber[800],
                    borderRadius: BorderRadius.circular(8),
                  ),
                  child: const Text(
                    '⚠️ Warning: Do not use mnemonics or seeds generated on the web for your bitcoin wallet. Only use for testnet!',
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                Card(
                  elevation: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: DefaultTabController(
                      length: 2,
                      initialIndex: _tabIndex,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          TabBar(
                            onTap: (i) => setState(() => _tabIndex = i),
                            tabs: const [
                              Tab(text: 'Generate'),
                              Tab(text: 'Validate'),
                            ],
                          ),
                          const SizedBox(height: 16),
                          IndexedStack(
                            index: _tabIndex,
                            children: [
                              // Generate Tab
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      ElevatedButton.icon(
                                        onPressed: _generateMnemonic,
                                        icon: const Icon(Icons.casino),
                                        label: const Text('Generate'),
                                      ),
                                      const Text('Words:'),
                                      const SizedBox(width: 8),
                                      DropdownButton<int>(
                                        value: _mnemonicWordCount,
                                        items: const [
                                          DropdownMenuItem(
                                            value: 12,
                                            child: Text('12'),
                                          ),
                                          DropdownMenuItem(
                                            value: 24,
                                            child: Text('24'),
                                          ),
                                        ],
                                        onChanged: (v) => setState(
                                          () => _mnemonicWordCount = v!,
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                              // Validate Tab
                              Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  TextField(
                                    controller: _mnemonicController,
                                    decoration: const InputDecoration(
                                      labelText: 'Enter mnemonic',
                                    ),
                                    minLines: 2,
                                    maxLines: 3,
                                    onChanged: _mnemonicControllerChanged,
                                  ),
                                  const SizedBox(height: 8),
                                  ElevatedButton.icon(
                                    onPressed: _validateMnemonic,
                                    icon: const Icon(Icons.check),
                                    label: const Text('Validate'),
                                  ),
                                  const SizedBox(height: 8),
                                  if (_error.isNotEmpty)
                                    Text(
                                      _error,
                                      style: const TextStyle(color: Colors.red),
                                    ),
                                  if (_mnemonic == 'Valid mnemonic!')
                                    const Text(
                                      'Mnemonic is valid!',
                                      style: TextStyle(color: Colors.green),
                                    ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                if (_mnemonic.isNotEmpty) ...[
                  const SizedBox(height: 16),
                  Card(
                    elevation: 2,
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(height: 16),
                          const Text(
                            'BIP 39 Mnemonic',
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          SelectableText(
                            _mnemonic,
                            style: const TextStyle(fontFamily: 'monospace'),
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'BIP 39 Seed',
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          SelectableText(
                            _seed,
                            style: const TextStyle(fontFamily: 'monospace'),
                          ),
                          const Divider(height: 16),
                          Row(
                            children: [
                              const Text(
                                'Network:',
                                style: TextStyle(fontWeight: FontWeight.bold),
                              ),
                              const SizedBox(width: 8),
                              DropdownButton<Network>(
                                value: _network,
                                items: const [
                                  DropdownMenuItem(
                                    value: Network.mainnet,
                                    child: Text('mainnet'),
                                  ),
                                  DropdownMenuItem(
                                    value: Network.testnet,
                                    child: Text('testnet'),
                                  ),
                                ],
                                onChanged: _updateNetwork,
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'BIP 32 Master Key',
                            style: TextStyle(fontWeight: FontWeight.bold),
                          ),
                          const SizedBox(height: 4),
                          SelectableText(
                            'XPRV: $_xprv',
                            style: const TextStyle(fontFamily: 'monospace'),
                          ),
                          const SizedBox(height: 4),
                          SelectableText(
                            'XPUB: $_xpub',
                            style: const TextStyle(fontFamily: 'monospace'),
                          ),
                          const Divider(height: 16),
                          const Text(
                            'Derivation Path',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          DefaultTabController(
                            length: 3,
                            initialIndex: _derivationPathTabIndex,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                TabBar(
                                  onTap: _updateDerivationPathTab,
                                  tabs: const [
                                    Tab(text: 'BIP 44'),
                                    Tab(text: 'BIP 49'),
                                    Tab(text: 'BIP 84'),
                                  ],
                                ),
                                const SizedBox(height: 16),
                                IndexedStack(
                                  index: _derivationPathTabIndex,
                                  children: [
                                    // BIP 44 Tab
                                    _derivationPathUI(),
                                    // BIP 49 Tab
                                    _derivationPathUI(),
                                    // BIP 84 Tab
                                    _derivationPathUI(),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          const Divider(height: 16),
                          const Text(
                            'Derived Addresses',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 16),
                          _derivedAddresses(),
                        ],
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}
