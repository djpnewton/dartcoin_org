import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'package:dartcoin/dartcoin.dart';

import 'helper.dart';
import 'backimg.dart';

class SignVerifyPage extends StatefulWidget {
  const SignVerifyPage({super.key});

  @override
  State<SignVerifyPage> createState() => _SignVerifyPageState();
}

class _SignVerifyPageState extends State<SignVerifyPage>
    with SingleTickerProviderStateMixin {
  final _messageController = TextEditingController();
  final _privateKeyController = TextEditingController();
  final _signatureController = TextEditingController();
  final _addressController = TextEditingController();
  final _publicKeyController = TextEditingController();
  String _address = '';
  String _publicKey = '';
  String _signature = '';
  String _verifyResult = '';
  int _signTabIndex = 0;
  int _verifyTabIndex = 0;
  Network _network = Network.testnet;
  ScriptType _scriptType = ScriptType.p2pkh;

  void _signMessage() {
    setState(() {
      _address = '';
      _publicKey = '';
      _signature = '';
      _verifyResult = '';
    });
    PrivateKey pk;
    final pkData = _privateKeyController.text.trim();
    final msg = utf8.encode(_messageController.text);
    try {
      pk = PrivateKey.fromWif(pkData);
    } catch (e) {
      try {
        pk = PrivateKey.fromPrivateKey(hexToBytes(pkData));
      } catch (e) {
        _signature = '';
        snackbar(context, 'Invalid private key format');
        return;
      }
    }
    setState(() {
      if (_signTabIndex == 0) {
        BitcoinSignedMessage bsm;
        try {
          bsm = bitcoinSignedMessageSign(pk, msg, _network, _scriptType);
        } catch (e) {
          snackbar(context, 'Error signing message: $e');
          return;
        }
        _address = bsm.address;
        _signature = bsm.signature;
      } else {
        DERSignedMessage sig;
        try {
          sig = derSign(pk, msg);
        } catch (e) {
          snackbar(context, 'Error signing message: $e');
          return;
        }
        _publicKey = bytesToHex(sig.publicKey);
        _signature = bytesToHex(sig.signature);
      }
      snackbar(context, 'Message signed successfully');
    });
  }

  void _verifySignature() {
    setState(() {
      setState(() {
        _verifyResult = '';
      });
      final msg = utf8.encode(_messageController.text);
      final signature = _signatureController.text.trim();
      if (signature.isEmpty) {
        snackbar(context, 'Signature is required');
        return;
      }
      if (_verifyTabIndex == 0) {
        final address = _addressController.text.trim();
        if (address.isEmpty) {
          snackbar(context, 'Address is required for Bitcoin Signed Message');
          return;
        }
        bool result;
        try {
          result = bitcoinSignedMessageVerify(address, msg, signature);
        } catch (e) {
          snackbar(context, 'Error verifying signature: $e');
          return;
        }
        _verifyResult = result
            ? 'Valid signature for message and $address'
            : 'Invalid signature for message and $address';
        if (result) {
          snackbar(context, 'Message verified');
        }
      } else {
        Uint8List sigBytes;
        try {
          sigBytes = hexToBytes(signature);
        } catch (e) {
          snackbar(context, 'Invalid signature format');
          return;
        }
        final publicKeyHex = _publicKeyController.text.trim();
        if (publicKeyHex.isEmpty) {
          snackbar(context, 'Public Key is required for DER verification');
          return;
        }
        final publicKey = PublicKey.fromPublicKey(hexToBytes(publicKeyHex));
        bool result;
        try {
          result = derVerify(publicKey, msg, sigBytes);
        } catch (e) {
          snackbar(context, 'Error verifying signature: $e');
          return;
        }
        _verifyResult = result ? 'Valid signature' : 'Invalid signature';
        if (result) {
          snackbar(context, 'Message verified');
        }
      }
    });
  }

  Widget _signTabContent(String title) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        TextField(
          controller: _messageController,
          decoration: const InputDecoration(labelText: 'Message'),
          minLines: 2,
          maxLines: 4,
        ),
        const SizedBox(height: 8),
        TextField(
          controller: _privateKeyController,
          decoration: const InputDecoration(labelText: 'Private Key (WIF/Hex)'),
          minLines: 1,
          maxLines: 1,
        ),
        if (_signTabIndex == 0)
          Padding(
            padding: const EdgeInsets.all(12.0),
            child: Row(
              children: [
                const Text('Network:'),
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
                    DropdownMenuItem(
                      value: Network.regtest,
                      child: Text('regtest'),
                    ),
                  ],
                  onChanged: (v) => setState(() => _network = v!),
                ),
                const SizedBox(width: 24),
                const Text('Script Type:'),
                const SizedBox(width: 8),
                DropdownButton<ScriptType>(
                  value: _scriptType,
                  items: const [
                    DropdownMenuItem(
                      value: ScriptType.p2pkh,
                      child: Text('P2PKH'),
                    ),
                    DropdownMenuItem(
                      value: ScriptType.p2shP2wpkh,
                      child: Text('P2SH-P2WPKH'),
                    ),
                    DropdownMenuItem(
                      value: ScriptType.p2wpkh,
                      child: Text('P2WPKH'),
                    ),
                  ],
                  onChanged: (v) => setState(() => _scriptType = v!),
                ),
              ],
            ),
          ),
        const SizedBox(height: 8),
        ElevatedButton.icon(
          onPressed: _signMessage,
          icon: const Icon(Icons.edit),
          label: const Text('Sign'),
        ),
        if (_signTabIndex == 0 && _address.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: SelectableText(
              'Address: $_address',
              style: const TextStyle(fontFamily: 'monospace'),
            ),
          ),
        if (_signTabIndex == 1 && _publicKey.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: SelectableText(
              'Public Key: $_publicKey',
              style: const TextStyle(fontFamily: 'monospace'),
            ),
          ),
        if (_signature.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 8.0),
            child: SelectableText(
              'Signature: $_signature',
              style: const TextStyle(fontFamily: 'monospace'),
            ),
          ),
      ],
    );
  }

  Widget _verifyTabContent(String title) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        TextField(
          controller: _messageController,
          decoration: const InputDecoration(labelText: 'Message'),
          minLines: 2,
          maxLines: 4,
        ),
        const SizedBox(height: 8),
        if (_verifyTabIndex == 0)
          Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: TextField(
              controller: _addressController,
              decoration: const InputDecoration(labelText: 'Address'),
              minLines: 1,
              maxLines: 1,
            ),
          ),
        if (_verifyTabIndex == 1)
          Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: TextField(
              controller: _publicKeyController,
              decoration: const InputDecoration(labelText: 'Public Key (hex)'),
              minLines: 1,
              maxLines: 1,
            ),
          ),
        TextField(
          controller: _signatureController,
          decoration: const InputDecoration(labelText: 'Signature'),
          minLines: 1,
          maxLines: 2,
        ),
        const SizedBox(height: 8),
        ElevatedButton.icon(
          onPressed: _verifySignature,
          icon: const Icon(Icons.verified),
          label: const Text('Verify'),
        ),
        const SizedBox(height: 8),
        Text(
          _verifyResult,
          style: TextStyle(
            color: _verifyResult.contains('Valid') ? Colors.green : Colors.red,
            fontWeight: FontWeight.bold,
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Sign / Verify Message')),
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
                    '⚠️ Warning: Do not enter private keys from your bitcoin wallet. Only use for testnet!',
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
                      initialIndex: _signTabIndex,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          TabBar(
                            onTap: (i) => setState(() => _signTabIndex = i),
                            tabs: const [
                              Tab(text: 'Bitcoin Signed Message'),
                              Tab(text: 'DER'),
                            ],
                          ),
                          const SizedBox(height: 16),
                          IndexedStack(
                            index: _signTabIndex,
                            children: [
                              _signTabContent('Sign Message'),
                              _signTabContent('Sign Message (DER)'),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 24),
                Card(
                  elevation: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: DefaultTabController(
                      length: 2,
                      initialIndex: _verifyTabIndex,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          TabBar(
                            onTap: (i) => setState(() => _verifyTabIndex = i),
                            tabs: const [
                              Tab(text: 'Bitcoin Signed Message'),
                              Tab(text: 'DER'),
                            ],
                          ),
                          const SizedBox(height: 16),
                          IndexedStack(
                            index: _verifyTabIndex,
                            children: [
                              _verifyTabContent('Verify Signature'),
                              _verifyTabContent('Verify Signature (DER)'),
                            ],
                          ),
                        ],
                      ),
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
