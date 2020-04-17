import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Profile from '../../../containers/instagram/profileTab';

const ProfileStack = createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Profile',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });

  ProfileStack.navigationOptions = {
    tabBarTestIDProps: {
      testID: 'TEST_ID_PROFILE',
      accessibilityLabel: 'TEST_ID_PROFILE_ACLBL',
    },
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={'ios-person'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };

  export default ProfileStack;
  
