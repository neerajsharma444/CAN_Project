import React, {useEffect} from 'react';
import RootNavigator from '@navigation/Root/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
// import {store, persistor} from '@redux/configureStore';
import {store, persistor} from '@redux/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
