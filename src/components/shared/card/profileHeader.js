import React, { Component } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { connect } from "react-redux";

class ProfileHeader extends Component {

    render() {
        let userFullName = this.props.userInfo.givenName + ' ' + this.props.userInfo.familyName;
        let userEmail = this.props.userInfo.displayableId;
        let base64Icon = this.props.userInfo.userPhoto;
      return (
        <View style={styles.profileContainer}>
            <View style={styles.imgView}>
                <Image
                    source={{ uri: `${base64Icon}`}}
                    style={styles.userImage}
                />                  
            </View>
            <View style={styles.profileText}>
                <Text style={styles.userName}>{userFullName}</Text>
                <Text style={styles.userEmail}>{userEmail}</Text>
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    profileContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor: '#777777',
    },
    imgView:{
        flex:1,
        paddingLeft:20,
        paddingRight:10,
    },
    userImage:{
        height: 55, 
        width: 55, 
        borderRadius:50,        
    },
    profileText: {
        flex:3,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    userName:{
        fontSize:20,
        color:'white',
        paddingBottom:5,
        textAlign:'left',
    },
    userEmail:{
        fontSize:14,
        color:'white',
        textAlign:'left',
      },
        headerContainer: {
        height:100,
        backgroundColor:'#5A6AC9'
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
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);  
