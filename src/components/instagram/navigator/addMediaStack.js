import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AddMediaTab from '../../../containers/instagram/addMediaTab';

const AddMediaStack = createStackNavigator({
    Home: {
      screen: AddMediaTab,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Media',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });

  AddMediaStack.navigationOptions = {
    tabBarTestIDProps: {
      testID: 'TEST_ID_ADDMEDIA',
      accessibilityLabel: 'TEST_ID_ADDMEDIA_ACLBL',
    },
    tabBarLabel: 'Media',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={'ios-videocam'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };


  export default AddMediaStack;
  
