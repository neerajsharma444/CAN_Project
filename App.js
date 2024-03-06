import React, {useEffect} from 'react';
import RootNavigator from '@components/navigation/Root/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootNavigator />;
};

export default App;
