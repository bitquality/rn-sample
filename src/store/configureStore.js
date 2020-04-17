import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import uiReducer from "./reducers/shared/ui";
import authReducer from "./reducers/shared/auth";
import appReducer from './reducers/shared/app';

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    app: appReducer,
  });
  
  let composeEnhancers = compose;

  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
  
  const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  };
  
  export default configureStore;

