import React from 'react'
import {StyleSheet, View, TouchableOpacity,Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 10

    },
    button: {
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%' 
    },
    labelContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight:20,
    },
    label: {
        fontSize: 18,
        color: '#FFF',
    }
});

const GradientButton = ({buttonLabel, onPress, height, width}) => {
    const containerStyle = [styles.container];
    containerStyle.push({
        height,
        width: `${width}%`
    });

    return (
        <TouchableOpacity 
            onPress = {onPress}
            style = {containerStyle}>
            <LinearGradient 
                start = {{x: 0.0, y:1.0}}
                end = {{x:1, y:0}}
                colors = {['#8E9ADB', '#5A6AC9', '#3546A8']}
                locations = {[0.2, 0.5, 1]}
                style = {styles.button}
                >
                <View style={styles.labelContainer}>
                    <Text style={styles.label}>{buttonLabel}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default GradientButton;

