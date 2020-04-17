import React, { Component } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { connect } from "react-redux";
import Container from './container';
import { Logo } from '../../../components/shared/logo'
import { CardWithActions } from '../../../components/shared/card';
import {GradientButton} from '../../../components/shared/button';
import { tryAuth, authAutoSignIn } from "../../../store/actions/index";

class AuthScreen extends Component {

  accessToken = "";
  constructor(props) {
    super(props);
  }

  authHandler = () => {
    this.props.onTryAuth(this.props);
  };

  render() {
      let submitButton = (
        <GradientButton
          buttonLabel = "Sign in"
          onPress={this.authHandler}
          height = {40}
          width = {50}
        />
      );
      if (this.props.isLoading) {
        submitButton = <ActivityIndicator />;
      }
      return (
        <Container>
          <Logo version="1" />
          <CardWithActions>
            <Ionicon
                name='md-airplane'
                color= '#5A6AC9'
                size={30}
              />
              <Text style={styles.title}>Application tagline </Text>
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius laoreet porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              {submitButton}
          </CardWithActions>
        </Container>
      );
    }
  }

  const styles = StyleSheet.create({
      title: {
        fontSize:20,
        color: '#777',
        fontWeight: 'bold',
        fontFamily: 'sans-serif-light',
      },
      subTitle: {
        paddingTop:10,
        fontWeight: 'bold',
        fontSize:18,
        color: '#777',
      },
      text: {
        fontSize:14,
        color: '#777',
        paddingTop:10,
        paddingBottom: 5,
      }
  });

  const mapStateToProps = state => {
    return {
      isLoading: state.ui.isLoading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAuth: (props) => dispatch(tryAuth(props)),
      onAutoSignIn: () => dispatch(authAutoSignIn())
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
