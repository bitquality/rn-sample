import React, { Component } from 'react';
import { createBottomTabNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Dimensions } from 'react-native';

import AddMediaStack from './addMediaStack';
import HomeStack from './homeStack';
import LikesStack from './likesStack';
import ProfileStack from './profileStack';
import SearchStack from './searchStack';


const MainTabNavigator = createBottomTabNavigator(
    {
      HomeStack,
      AddMediaStack,
      LikesStack,
      ProfileStack,
      SearchStack,
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          headerTitle: routeName
        };
      },
      animationEnabled: true,
      swipeEnabled: true,
      tabBarPosition: "bottom",
      tabBarOptions: {
          style: {
              ...Platform.select({
                  android: {
                      backgroundColor: 'white'
                  }
              })
          },
          activeTintColor: '#000',
          inactiveTintColor: '#d1cece',
          showLabel: true,
          showIcon: true
        }
    }
  );
  
  export default MainTabNavigator;

