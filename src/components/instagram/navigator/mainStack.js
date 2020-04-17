import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import MainTabNavigator from './mainTabNavigator';

const MainStack = createStackNavigator(
    {
      MainTabNavigator: MainTabNavigator
    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  );

  export default MainStack;

