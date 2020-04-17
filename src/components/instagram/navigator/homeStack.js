import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from '../../../containers/instagram/homeTab';

const HomeStack = createStackNavigator({
    Home: {
      screen: HomeTab,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Home',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });

  HomeStack.navigationOptions = {
    tabBarTestIDProps: {
      testID: 'TEST_ID_HOME',
      accessibilityLabel: 'TEST_ID_HOME_ACLBL',
    },
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={'ios-home'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };

  export default HomeStack;
  
