import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Expo from 'expo';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

const Routes = () => {
  return (
    <Router hideNavBar navigationBarStyle={{ marginTop: Expo.Constants.statusBarHeight }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} />
        </Scene>

        <Scene key="main" hideNavBar>
          <Scene rightTitle="Add" key="home" component={Home} initial />
        </Scene>
      </Scene>
    </Router>
  );
};
export default Routes;
