import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "react-native-reanimated"
import Navigation from './src/navigation/Navigation';




console.disableYellowBox = true;

function App() {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>

        <Navigation />

    </GestureHandlerRootView>

    
  );
}

export default App;

