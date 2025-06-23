import 'package:flutter/material.dart';
import 'package:logging/logging.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:go_router/go_router.dart';

import 'config.dart';
import 'backimg.dart';
import 'base58_page.dart';
import 'bech32_page.dart';
import 'mnemonic_page.dart';
import 'about_page.dart';
import 'sign_verify_page.dart';

final log = Logger('mainlogger');

final _router = GoRouter(
  routes: [
    GoRoute(
      name: 'home',
      path: '/',
      builder: (context, state) => const MyHomePage(title: 'Dartcoin'),
      routes: <RouteBase>[
        GoRoute(
          name: AppPage.base58.name,
          path: '/base58',
          builder: (context, state) => Base58Page(),
        ),
        GoRoute(
          name: AppPage.bech32.name,
          path: '/bech32',
          builder: (context, state) => Bech32Page(),
        ),
        GoRoute(
          name: AppPage.mnemonic.name,
          path: '/mnemonic',
          builder: (context, state) => const MnemonicPage(),
        ),
        GoRoute(
          name: AppPage.signverify.name,
          path: '/signverify',
          builder: (context, state) => const SignVerifyPage(),
        ),
        GoRoute(
          name: AppPage.about.name,
          path: '/about',
          builder: (context, state) => const AboutPage(),
        ),
      ],
    ),
  ],
);

void main() {
  Logger.root.level = Level.ALL; // defaults to Level.INFO
  Logger.root.onRecord.listen((record) {
    debugPrint('${record.level.name}: ${record.time}: ${record.message}');
  });

  log.info('build GIT SHA: $gitSha');
  log.info('build date: $buildDate');

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Dartcoin',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.deepOrange,
          brightness: Brightness.dark,
        ),
      ),
      routerConfig: _router,
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  void _navigateToPage(AppPage page) async {
    // close the drawer
    Navigator.pop(context);
    // navigate to the selected page
    if (mounted) {
      switch (page) {
        case AppPage.base58:
          log.info('Navigating to Base58');
          context.goNamed(AppPage.base58.name);
        case AppPage.bech32:
          log.info('Navigating to Bech32');
          context.goNamed(AppPage.bech32.name);
        case AppPage.mnemonic:
          log.info('Navigating to Mnemonic');
          context.goNamed(AppPage.mnemonic.name);
        case AppPage.signverify:
          log.info('Navigating to Sign/Verify');
          context.goNamed(AppPage.signverify.name);
        case AppPage.about:
          log.info('Navigating to About');
          context.goNamed(AppPage.about.name);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final isNarrow = MediaQuery.of(context).size.width < 520;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        actions: isNarrow
            ? null
            : [
                TextButton.icon(
                  onPressed: () {
                    const url = 'https://github.com/djpnewton/dartcoin';
                    launchUrl(Uri.parse(url));
                  },
                  icon: const Icon(Icons.code, size: 12),
                  label: const Text(
                    'Contribute on GitHub',
                    style: TextStyle(fontSize: 12),
                  ),
                ),
              ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.primary,
              ),
              child: const Text(
                'Navigation',
                style: TextStyle(color: Colors.white, fontSize: 24),
              ),
            ),
            ListTile(
              leading: const Icon(Icons.qr_code),
              title: Text(pageTitle(AppPage.base58)),
              onTap: () => _navigateToPage(AppPage.base58),
            ),
            ListTile(
              leading: const Icon(Icons.qr_code),
              title: Text(pageTitle(AppPage.bech32)),
              onTap: () => _navigateToPage(AppPage.bech32),
            ),
            ListTile(
              leading: const Icon(Icons.key),
              title: Text(pageTitle(AppPage.mnemonic)),
              onTap: () => _navigateToPage(AppPage.mnemonic),
            ),
            ListTile(
              leading: const Icon(Icons.verified_user),
              title: Text(pageTitle(AppPage.signverify)),
              onTap: () => _navigateToPage(AppPage.signverify),
            ),
            ListTile(
              leading: const Icon(Icons.info),
              title: Text(pageTitle(AppPage.about)),
              onTap: () => _navigateToPage(AppPage.about),
            ),
          ],
        ),
      ),
      body: BackImg(
        Center(
          child: const Text(
            'A playground for learning about bitcoin. Do not use on mainnet.',
          ),
        ),
      ),
    );
  }
}
