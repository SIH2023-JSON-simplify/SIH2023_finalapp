import { View, Text, SafeAreaView, Modal } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';

const test = () => {
    const[visible,setVisible] = useState(false);
    const openLinkInWebView = () => setVisible(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Text onPress={openLinkInWebView}>kjfdshkj</Text>
    <Modal
     visible={visible}
     presentationStyle={'pageSheet'}
     animationType={'slide'}
     onRequestClose={() => setVisible(!visible)}>
    <WebView 
      source={{ uri: 'https://services.ecourts.gov.in/ecourtindia_v4_bilingual/securimage/securimage_show.php?f716e6a80075aab1519c2d438b5671ac' }} 
    />
    </Modal>
  </SafeAreaView>
  )
}

export default test