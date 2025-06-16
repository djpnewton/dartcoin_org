const String gitSha = 'GIT_SHA_REPLACE';
const String buildDate = 'BUILD_DATE_REPLACE';

enum AppPage { base58, bech32, about }

const _pageTitles = {
  AppPage.base58: 'Base58',
  AppPage.bech32: 'Bech32',
  AppPage.about: 'About',
};

String pageTitle(AppPage page) {
  return _pageTitles[page] ?? 'Unknown';
}
