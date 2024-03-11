import React, {useEffect} from 'react';
import RootNavigator from '@components/navigation/Root/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import {store, persistor} from '@components/redux/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
