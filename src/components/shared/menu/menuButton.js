import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class MenuButton extends Component {
    render() {
      return (
        <Icon style={{ paddingLeft: 10 }} 
            onPress={() => {this.props.navigation.toggleDrawer()}} 
            name="md-menu" size={30} />
      );
    }
  }

const styles = StyleSheet.create({
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 40,
        left: 40
    }
});

  export default MenuButton;