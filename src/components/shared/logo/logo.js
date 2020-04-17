import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'

const { width, height } = Dimensions.get('window')
const DEVICE_HEIGHT = height
const DEVICE_WIDTH = width

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoGreen: {
    color: '#009B3A',
    fontSize: 37,
    paddingLeft:5,
  },
  logoBlue: {
    color: '#0039A6',
    fontSize: 36
  },
  logoWhite: {
    fontFamily: 'sans-serif-light',
    fontSize: 40,
    color: '#fff',
},
})

const Logo = (props) => (
  <View style={styles.container}>
     {/* <Ionicon
              name='md-airplane'
              color= 'white'
              size={30}
            /> */}
    <Text style={styles.logoWhite}>
      AppName
    </Text>
  </View>
)

export default Logo
