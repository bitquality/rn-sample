import * as actionTypes from  '../../actions/actionTypes';
import { updateObject } from '../../utility';
import {base64DummyProfileIcon} from '../../../data';


const initialState = {
    currentUser: 'none',
    photo: base64DummyProfileIcon,
}

const fetchUserPhotoStart = ( state, action ) => {
  return updateObject( state, { loading: true } );
};

const fetchUserPhotoSuccess = ( state, action ) => {
  return updateObject( state, {
      photo: action.photo,
      loading: false
  } );
};

const fetchUserPhotoFail = ( state, action ) => {
  return updateObject( state, { loading: false } );
};

const userPhotoInit = ( state, action ) => {
  return updateObject( state, { photo: base64DummyProfileIcon } );
};

const setCurrentUser = ( state, action ) => {
  return updateObject( state, { currentUser: action.payload } );
};

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.SET_CURRENT_USER: return setCurrentUser( state, action );
      case actionTypes.USER_PHOTO_INIT: return userPhotoInit( state, action );
      case actionTypes.FETCH_USER_PHOTO_START: return fetchUserPhotoStart( state, action );
      case actionTypes.FETCH_USER_PHOTO_SUCCESS: return fetchUserPhotoSuccess( state, action );
      case actionTypes.FETCH_USER_PHOTO_FAIL: return fetchUserPhotoFail( state, action );
      default:
        return state;
    }
  };
  
  export default reducer;