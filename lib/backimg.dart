import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class BackImg extends StatefulWidget {
  const BackImg(this.child, {super.key});

  final Widget child;

  @override
  State<BackImg> createState() => _BackImgState();
}

class _BackImgState extends State<BackImg> {
  static AssetImage? _backgroundImage;

  @override
  void initState() {
    super.initState();
    // You can load the image here if needed
    _loadBackgroundImage();
  }

  Future<void> _loadBackgroundImage() async {
    if (_backgroundImage != null) {
      // If the image is already loaded, no need to load it again
      return;
    }
    // return a List<String> with all your images
    final assetManifest = await AssetManifest.loadFromAssetBundle(rootBundle);
    final imageAssetsList = assetManifest
        .listAssets()
        .where((string) => string.startsWith("assets/images/backgrounds"))
        .toList();
    // choose a random image from the list
    if (imageAssetsList.isNotEmpty) {
      final randomImage =
          imageAssetsList[DateTime.now().millisecondsSinceEpoch %
              imageAssetsList.length];
      setState(() {
        _backgroundImage = AssetImage(randomImage);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          decoration: BoxDecoration(
            image: _backgroundImage != null
                ? DecorationImage(image: _backgroundImage!, fit: BoxFit.cover)
                : null,
          ),
        ),

        Container(decoration: BoxDecoration(color: Colors.black54)),
        Center(child: widget.child),
      ],
    );
  }
}
