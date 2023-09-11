import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const MyWebComponent = () => {
  return <WebView source={{ uri: 'http://127.0.0.1:8000/media/captcha_image.png' }} style={{ flex: 1 }} />;
}

export default MyWebComponent