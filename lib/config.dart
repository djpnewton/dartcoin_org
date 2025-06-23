const String gitSha = 'GIT_SHA_REPLACE';
const String buildDate = 'BUILD_DATE_REPLACE';

enum AppPage { base58, bech32, mnemonic, signverify, about }

const _pageTitles = {
  AppPage.base58: 'Base58',
  AppPage.bech32: 'Bech32',
  AppPage.mnemonic: 'BIP 39 Mnemonic',
  AppPage.signverify: 'Sign/Verify',
  AppPage.about: 'About',
};

String pageTitle(AppPage page) {
  return _pageTitles[page] ?? 'Unknown';
}
