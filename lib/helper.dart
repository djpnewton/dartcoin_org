import 'package:flutter/material.dart';

void snackbar(BuildContext context, String msg) {
  var snackBar = SnackBar(content: Text(msg));
  ScaffoldMessenger.of(context).showSnackBar(snackBar);
}
