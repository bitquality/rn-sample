import React from 'react';
import { Dimensions } from 'react-native';
import {createSwitchNavigator, createAppContainer, createDrawerNavigator,} from 'react-navigation';

import MenuDrawer from '../shared/menu/menuDrawer';
import SplashScreen from '../../containers/shared/splashScreen';
import AuthScreen from '../../containers/shared/auth/authScreen';

import InstagramNavigator from '../instagram/navigator/mainStack';

  const WIDTH = Dimensions.get('window').width;
  const DrawerConfig = {
    drawerWidth: WIDTH * 0.85,
    contentComponent: ({navigation}) => {
      return (
        <MenuDrawer navigation={navigation}/>
      )
    }
  };
  
  const AppDrawerNavigator = createDrawerNavigator(
    {
      Dashboard: {
        screen: InstagramNavigator 
      },
      Instagram: {
        screen: InstagramNavigator
      },
    },
    DrawerConfig
  );
  
  const AppSwitchNavigator = createSwitchNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {header: null}
    },
    Auth: { screen: AuthScreen },
    Dashboard: { screen: AppDrawerNavigator },
  });
  
  const AppNavigator = createAppContainer(AppSwitchNavigator);

  export default AppNavigator;
  