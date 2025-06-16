import 'package:flutter/material.dart';

import 'config.dart';
import 'backimg.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({super.key});

  @override
  State<AboutPage> createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('About')),
      body: Center(
        child: BackImg(
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Welcome to the About Page!',
                style: TextStyle(fontSize: 20),
              ),
              const SizedBox(height: 20),
              Text('Build SHA: $gitSha', style: const TextStyle(fontSize: 16)),
              const SizedBox(height: 10),
              Text(
                'Build Date: $buildDate',
                style: const TextStyle(fontSize: 16),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
