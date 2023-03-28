/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
