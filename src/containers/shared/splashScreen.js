import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#5A6AC9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        paddingTop: 10,
        fontFamily: 'sans-serif-light',
        fontSize: 40,
        color: '#fff',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: DEVICE_HEIGHT,
      width: DEVICE_WIDTH
    },
});
const backgroundImage = '../../assets/app_entry2.jpeg';

class SplashScreen extends Component {
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Auth');
        }, 2000);
    }

    render() {
      return (
        <View style={styles.container}>
            <Ionicon
                name='md-airplane'
                color= 'white'
                size={30}
              />
          <Text style={styles.text}>AppName</Text>
        </View>
      );
    }
  }

  export default SplashScreen;