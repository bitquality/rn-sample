import React, { Component } from 'react';
import { createStackNavigator  } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchTab from '../../../containers/instagram/searchTab';

const SearchStack = createStackNavigator({
    Home: {
      screen: SearchTab,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Search',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    }
  });

  SearchStack.navigationOptions = {
    tabBarTestIDProps: {
      testID: 'TEST_ID_SEARCH',
      accessibilityLabel: 'TEST_ID_SEARCH_ACLBL',
    },
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor, focused, horizontal }) => (
      <Icon
        name={'ios-search'}
        size={horizontal ? 20 : 26}
        style={{ color: tintColor }}
      />
    ),
  };

  export default SearchStack;
  
