import { uiStartLoading, uiStopLoading, authGetToken } from "../index";
import * as actionTypes from '../actionTypes';
import { base64DummyProfileIcon } from '../../../data';

export const setCurrentUser = (currentUser) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: currentUser
});

export const userPhotoInit = () => {
  return {
    type: actionTypes.USER_PHOTO_INIT
  };
};

export const fetchUserPhotoStart = () => {
  return {
    type: actionTypes.FETCH_USER_PHOTO_START
  };
};

export const fetchUserPhotoSuccess = (photo) => {
  return {
    type: actionTypes.FETCH_USER_PHOTO_SUCCESS,
    photo: photo
  };
};

export const fetchUserPhotoFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_PHOTO_FAIL,
    error: error
  };
};

export const fetchUserPhoto = (userAlias) => {
  return async dispatch => {
    dispatch(fetchUserPhotoStart());
    dispatch(uiStartLoading());
    try {
      // let accessToken = await dispatch(authGetToken());
      try {
        //     let response = await fetch(
        //         '[API END POINT]' + userAlias,
        //         {
        //             method: 'GET',
        //             headers: new Headers({
        //                 'Authorization': 'Bearer ' + accessToken,
        //                 'Content-Type': 'application/json'
        //             })
        //         }
        //     );
        //     let photo = await response.json();
        //     //console.log(photo);
        let photo = base64DummyProfileIcon;
        dispatch(fetchUserPhotoSuccess(photo));
        dispatch(uiStopLoading());
        return photo;
      }
      catch (error) {
        dispatch(fetchUserPhotoFail(error));
        dispatch(uiStopLoading());
        //alert('Failed to load user photo API');
        return base64DummyProfileIcon;
      }
    }
    catch (error) {
      dispatch(uiStopLoading());
      dispatch(fetchUserPhotoFail(error));
      console.log(error);
      //alert("Failed to get token, please try again!");
      return base64DummyProfileIcon;
    }
  }
};
