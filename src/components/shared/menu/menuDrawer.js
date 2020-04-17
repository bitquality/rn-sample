import React, { Component } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { connect } from "react-redux";
import {ProfileHeader} from '../card/index';

class MenuDrawer extends Component {

    navLink(nav, text){
        return (
            <TouchableOpacity style={{height:50}} 
                onPress={() =>{this.props.navigation.navigate(nav);}}> 
                <Text style={styles.link} >{text}</Text>
            </TouchableOpacity>
        )
    };

    render() {
      return (
         <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ProfileHeader/>
            </View>
            <View style={styles.bodyContainer}>
                {this.navLink('Instagram', 'Home')}
                {/* {this.navLink('SettingsStack', 'Settings')} */}
                {/* {this.navLink('About', 'About')} */}
                {/* ** Please do not remove below lines *** */}
                {/* {this.navLink('Travel', 'Travel')} */}
                {/* {this.navLink('Instagram', 'Instagram')} */}
                {/* {this.navLink('Feed', 'Feed')} */}
                {/* {this.navLink('Shopping', 'Shopping')} */}
            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.description}>AppName</Text>
                <Text style={styles.version}>ver 1.0</Text>
            </View>
         </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },
    headerContainer: {
        height:100,
        backgroundColor:'#5A6AC9'
    },
    bodyContainer: {
        flex:1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 450
    },
    link: {
        flex:1,
        fontSize: 20,
        padding:6,
        paddingLeft: 14,
        margin: 5,
        textAlign: 'left'
    },
    footerContainer: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth:1,
        borderTopColor:'lightgray',
    },
    description: {
        flex:1,
        marginLeft:20,
        fontSize:16,
    },
    version: {
        flex:1,
        textAlign:'right',
        marginRight:20,
        color:'gray',
    },
});

const mapStateToProps = state => {
    return {
      userInfo: state.app.currentUser.userInfo,
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MenuDrawer);