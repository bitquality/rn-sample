import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import LikesTab from '../../../containers/instagram/likesTab';

const LikesStack = createStackNavigator({
    Home: {
      screen: LikesTab,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Likes',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });

  LikesStack.navigationOptions = {
    tabBarTestIDProps: {
      testID: 'TEST_ID_LIKES',
      accessibilityLabel: 'TEST_ID_LIKES_ACLBL',
    },
    tabBarLabel: 'Likes',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={'ios-heart'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };

  export default LikesStack;
  
