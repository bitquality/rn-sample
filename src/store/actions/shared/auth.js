import AzureAdal from 'react-native-azure-adal';
import Config from 'react-native-config';
import { AsyncStorage } from "react-native";

import { TRY_AUTH, AUTH_SET_TOKEN, AUTH_REMOVE_TOKEN } from "../actionTypes";
import { uiStartLoading, uiStopLoading } from "./ui";
import { setCurrentUser, fetchUserPhoto} from './app';
import App from "../../../../App";

const useBroker = false;
const validateAuthority = false;

export const tryAuth = (props) => {
    return async dispatch => {
        dispatch(uiStartLoading());
        try {
            let isConfigure =  await AzureAdal.configure(Config.AAD_AUTHORITY, validateAuthority, Config.AAD_CLIENT_ID, Config.AAD_REDIRECT_URI, useBroker);
            if(isConfigure) {
              let userDetails = await AzureAdal.login(Config.AAD_RESOURCE_URI);
              //console.log(userDetails);
              accessToken = userDetails.accessToken;
              userName = userDetails.userInfo.givenName + ' ' + userDetails.userInfo.familyName;
              expiresIn = 6000; // TODO:
              refreshToken = accessToken; // TODO:
              dispatch(
                authStoreToken(
                  accessToken,
                  expiresIn,
                  refreshToken
                )
              );

              userDetails.userInfo.userAlias = userDetails.userInfo.displayableId.split('@')[0];
              // register push notification here if needed
              //startPushNotification(userDetails.userInfo.userAlias);

              let userPhoto = await dispatch(fetchUserPhoto(userDetails.userInfo.userAlias));
              userDetails.userInfo.userPhoto = userPhoto;
              dispatch(setCurrentUser(userDetails));
              let targetScreen = 'Dashboard'; 
              props.navigation.navigate(targetScreen);
            }
            else {
                dispatch(uiStopLoading());
                alert("Invalid authentication configuration.");;
            }
        }
          catch (error) {
            dispatch(uiStopLoading());
            console.log(error);
            alert("Authentication failed, please try again!");
        }
      };
};

export const authStoreToken = (token, expiresIn, refreshToken) => {
    return dispatch => {
      const now = new Date();
      const expiryDate = now.getTime() + expiresIn * 1000;
      dispatch(authSetToken(token, expiryDate));
      AsyncStorage.setItem("ap:auth:token", token);
      AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());
      AsyncStorage.setItem("ap:auth:refreshToken", refreshToken);
    };
  };
  
  export const authSetToken = (token, expiryDate) => {
    return {
      type: AUTH_SET_TOKEN,
      token: token,
      expiryDate: expiryDate
    };
  };

  export const authGetToken = () => {
    return async (dispatch, getState) => {
        try {
            let isConfigure =  await AzureAdal.configure(Config.AAD_AUTHORITY, validateAuthority, Config.AAD_CLIENT_ID, Config.AAD_REDIRECT_URI, useBroker);
            if(isConfigure) {
                let userDetails = await AzureAdal.getTokenAsync(Config.AAD_RESOURCE_URI);
                //console.log(userDetails);
                accessToken = userDetails.accessToken;
                return accessToken;
            }
        }
        catch (error) {
            console.log(error);
        }
    };
  };
  
  export const authAutoSignIn = (props) => {
    return dispatch => {
      dispatch(authGetToken())
        .then(token => {
            props.navigation.navigate('Dashboard');
        })
        .catch(err => console.log("Failed to fetch token!"));
    };
  };
  
  export const authClearStorage = () => {
    return dispatch => {
      AsyncStorage.removeItem("ap:auth:token");
      AsyncStorage.removeItem("ap:auth:expiryDate");
      return AsyncStorage.removeItem("ap:auth:refreshToken");
    };
  };
  
  export const authLogout = () => {
    return dispatch => {
      dispatch(authClearStorage()).then(() => {
        App();
      });
      dispatch(authRemoveToken());
    };
  };
  
  export const authRemoveToken = () => {
    return {
      type: AUTH_REMOVE_TOKEN
    };
  };
  