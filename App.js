import React, {useEffect} from 'react';
import RootNavigator from '@components/navigation/Root/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import store from '@components/redux/configureStore';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
