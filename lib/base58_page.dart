import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:dartcoin/dartcoin.dart';

import 'backimg.dart';
import 'helper.dart';

class Base58Page extends StatefulWidget {
  const Base58Page({super.key});

  @override
  State<Base58Page> createState() => _Base58PageState();
}

class _Base58PageState extends State<Base58Page> {
  final _encodeController = TextEditingController();
  final _decodeController = TextEditingController();
  String _inputOutputType = 'utf8';
  String _encodeError = '';
  String _decodeError = '';
  bool _useChecksum = false;

  void _encodeToBase58() {
    try {
      List<int> bytes;
      if (_inputOutputType == 'utf8') {
        bytes = utf8.encode(_encodeController.text);
      } else {
        bytes = hexToBytes(_encodeController.text);
      }
      setState(() {
        _encodeError = '';
        _decodeError = '';
        String result;
        if (_useChecksum) {
          result = base58EncodeCheck(Uint8List.fromList(bytes));
        } else {
          result = base58Encode(Uint8List.fromList(bytes));
        }
        _decodeController.text = result;
        snackbar(context, 'Encoded ${bytes.length} bytes to Base58: $result');
      });
    } catch (e) {
      setState(() {
        _encodeError = 'Error: ${e.toString()}';
      });
    }
  }

  void _decodeFromBase58() {
    try {
      final text = _decodeController.text;
      setState(() {
        _encodeError = '';
        _decodeError = '';
        List<int> bytes;
        if (_useChecksum) {
          bytes = base58DecodeCheck(text);
        } else {
          bytes = base58Decode(text);
        }
        String result;
        if (_inputOutputType == 'utf8') {
          result = utf8.decode(bytes);
        } else {
          result = bytesToHex(Uint8List.fromList(bytes));
        }
        _encodeController.text = result;
        snackbar(context, 'Decoded ${bytes.length} bytes to: $result');
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
      appBar: AppBar(title: const Text('Base58 Encoder/Decoder')),
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
                          'Encode to Base58',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Text('Input type:'),
                            const SizedBox(width: 8),
                            DropdownButton<String>(
                              value: _inputOutputType,
                              items: const [
                                DropdownMenuItem(
                                  value: 'utf8',
                                  child: Text('Text'),
                                ),
                                DropdownMenuItem(
                                  value: 'hex',
                                  child: Text('Hex'),
                                ),
                              ],
                              onChanged: (v) =>
                                  setState(() => _inputOutputType = v!),
                            ),
                          ],
                        ),
                        TextField(
                          controller: _encodeController,
                          decoration: const InputDecoration(labelText: 'Input'),
                          minLines: 3,
                          maxLines: null, // Allow unlimited lines
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            ElevatedButton.icon(
                              onPressed: _encodeToBase58,
                              icon: const Icon(Icons.arrow_downward),
                              label: const Text('Convert to Base58'),
                            ),
                            const SizedBox(width: 16),
                            Checkbox(
                              value: _useChecksum,
                              onChanged: (v) =>
                                  setState(() => _useChecksum = v!),
                            ),
                            const Text('With checksum'),
                          ],
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
                const SizedBox(height: 16),
                // Decode panel
                Card(
                  elevation: 2,
                  child: Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          'Decode from Base58',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            const Text('Output type:'),
                            const SizedBox(width: 8),
                            DropdownButton<String>(
                              value: _inputOutputType,
                              items: const [
                                DropdownMenuItem(
                                  value: 'utf8',
                                  child: Text('Text'),
                                ),
                                DropdownMenuItem(
                                  value: 'hex',
                                  child: Text('Hex'),
                                ),
                              ],
                              onChanged: (v) =>
                                  setState(() => _inputOutputType = v!),
                            ),
                          ],
                        ),
                        TextField(
                          controller: _decodeController,
                          decoration: const InputDecoration(
                            labelText: 'Base58 String',
                          ),
                          minLines: 3,
                          maxLines: null, // Allow unlimited lines
                        ),
                        const SizedBox(height: 8),
                        Row(
                          children: [
                            ElevatedButton.icon(
                              onPressed: _decodeFromBase58,
                              icon: const Icon(Icons.arrow_upward),
                              label: const Text('Convert from Base58'),
                            ),
                            const SizedBox(width: 16),
                            Checkbox(
                              value: _useChecksum,
                              onChanged: (v) =>
                                  setState(() => _useChecksum = v!),
                            ),
                            const Text('With checksum'),
                          ],
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
