import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import "react-native-reanimated"



console.disableYellowBox = true;

function App() {
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>

        <Navigation />

    </GestureHandlerRootView>

    
  );
}

export default App;

