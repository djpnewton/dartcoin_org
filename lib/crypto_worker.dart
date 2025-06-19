import 'dart:convert';
import 'dart:core';

import 'package:isolate_manager/isolate_manager.dart';

import 'package:dartcoin/dartcoin.dart';

class Address {
  final String derivationPath;
  final String address;
  final String publicKey;
  final String wif;

  Address(this.derivationPath, this.address, this.publicKey, this.wif);
}

class AddressParams {
  final PrivateKey privateKey;
  final Network network;
  final ScriptType scriptType;
  final String derivationPath;
  AddressParams({
    required this.privateKey,
    required this.network,
    required this.scriptType,
    required this.derivationPath,
  });
}

String _pkToJson(PrivateKey pk) {
  return jsonEncode({
    'depth': pk.depth,
    'parentFingerprint': pk.parentFingerprint,
    'childNumber': pk.childNumber,
    'publicKey': bytesToHex(pk.publicKey),
    'chainCode': bytesToHex(pk.chainCode),
    'privateKey': bytesToHex(pk.privateKey),
  });
}

PrivateKey _pkFromJson(String jsonString) {
  final jsonMap = jsonDecode(jsonString);
  return PrivateKey(
    jsonMap['depth'] as int,
    jsonMap['parentFingerprint'] as int,
    jsonMap['childNumber'] as int,
    hexToBytes(jsonMap['publicKey'] as String),
    hexToBytes(jsonMap['chainCode'] as String),
    hexToBytes(jsonMap['privateKey'] as String),
  );
}

String _apToJson(AddressParams params) {
  return jsonEncode({
    'privateKey': _pkToJson(params.privateKey),
    'network': params.network.name,
    'scriptType': params.scriptType.name,
    'derivationPath': params.derivationPath,
  });
}

AddressParams _apFromJson(String jsonString) {
  final jsonMap = jsonDecode(jsonString);
  return AddressParams(
    privateKey: _pkFromJson(jsonMap['privateKey'] as String),
    network: Network.values.byName(jsonMap['network'] as String),
    scriptType: ScriptType.values.byName(jsonMap['scriptType'] as String),
    derivationPath: jsonMap['derivationPath'] as String,
  );
}

String _addrsToJson(List<Address> addresses) {
  return jsonEncode(
    addresses
        .map(
          (addr) => {
            'derivationPath': addr.derivationPath,
            'address': addr.address,
            'publicKey': addr.publicKey,
            'wif': addr.wif,
          },
        )
        .toList(),
  );
}

List<Address> _addrsFromJson(String jsonString) {
  final List<dynamic> jsonList = jsonDecode(jsonString);
  return jsonList.map((json) {
    return Address(
      json['derivationPath'] as String,
      json['address'] as String,
      json['publicKey'] as String,
      json['wif'] as String,
    );
  }).toList();
}

//
// isolate manager functions
//

@isolateManagerSharedWorker
ImString imSeed(ImString mnemonic) {
  return ImString(mnemonicToSeed(mnemonic.unwrap));
}

@isolateManagerSharedWorker
ImString imMasterKey(ImString seed) {
  final pk = PrivateKey.fromSeed(hexToBytes(seed.unwrap));
  return ImString(_pkToJson(pk));
}

@isolateManagerSharedWorker
ImString imAddresses(ImString paramsJson) {
  final params = _apFromJson(paramsJson.unwrap);
  final key = params.privateKey.childFromDerivationPath(params.derivationPath);
  final addresses = <Address>[];
  for (var i = 0; i < 5; i++) {
    final derivationPathWithIndex = '${params.derivationPath}/$i';
    final childKey = key.childPrivateKey(i, hardened: false);
    final address = childKey.address(
      network: params.network,
      scriptType: params.scriptType,
    );
    addresses.add(
      Address(
        derivationPathWithIndex,
        address,
        bytesToHex(childKey.publicKey),
        Wif(params.network, childKey.privateKey, true).toWifString(),
      ),
    );
  }
  return ImString(_addrsToJson(addresses));
}

//
// CryptoWorker class
//

class CryptoWorker {
  late final IsolateManagerShared sharedIsolate;

  CryptoWorker() {
    sharedIsolate = IsolateManager.createShared(
      concurrent: 1,
      useWorker: true,
      isDebug: true,
      workerMappings: {
        // Map Dart function references to their JS worker names
        imSeed: 'imSeed',
        imMasterKey: 'imMasterKey',
        imAddresses: 'imAddresses',
      },
    )..start();
  }

  void stop() {
    sharedIsolate.stop();
  }

  Future<String> seed(String mnemonic) async {
    final result = await sharedIsolate.compute(imSeed, ImString(mnemonic));
    return result.unwrap;
  }

  Future<PrivateKey> masterKey(String seed) async {
    final pkJson = await sharedIsolate.compute(imMasterKey, ImString(seed));
    return _pkFromJson(pkJson.unwrap);
  }

  Future<List<Address>> addresses(
    PrivateKey privateKey,
    Network network,
    ScriptType scriptType,
    String derivationPath,
  ) async {
    final addrsJson = await sharedIsolate.compute(
      imAddresses,
      ImString(
        _apToJson(
          AddressParams(
            privateKey: privateKey,
            network: network,
            scriptType: scriptType,
            derivationPath: derivationPath,
          ),
        ),
      ),
    );
    return _addrsFromJson(addrsJson.unwrap);
  }
}
