import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'http://192.168.0.119:3001' }}
        style={styles.webView}
        bounces={false} // Deshabilitar el zoom (rebote) en iOS
        scalesPageToFit={false} // Deshabilitar el escalado de la página
        javaScriptEnabled={true} // Habilitar JavaScript en la WebView
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525', // Fondo negro
  },
  webView: {
    backgroundColor: '#252525',
    margin: 10,
    marginTop: 45, // Espacio superior para evitar el notch y dar espacio
  },
});