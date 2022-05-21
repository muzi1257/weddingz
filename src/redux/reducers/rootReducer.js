import { combineReducers } from 'redux';
import {
  userCreateReducer,
  userListReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './userReducers';
import {
  propertyCreateReducer,
  propertyListReducer,
  propertyDetailsReducer,
  propertyUpdateReducer,
} from './propertyReducers';
import {
  millListReducer,
  millDetailsReducer,
  millDeleteReducer,
  millCreateReducer,
  millUpdateReducer,
} from './millReducers';
import {
  trollyListReducer,
  trollyDetailsReducer,
  trollyDeleteReducer,
  trollyCreateReducer,
  trollyUpdateReducer,
} from './trollyReducers';


const rootReducer = combineReducers({

  millList: millListReducer,
  millDetails: millDetailsReducer,
  millDelete: millDeleteReducer,
  millCreate: millCreateReducer,
  millUpdate: millUpdateReducer,

  trollyList: trollyListReducer,
  trollyDetails: trollyDetailsReducer,
  trollyDelete: trollyDeleteReducer,
  trollyCreate: trollyCreateReducer,
  trollyUpdate: trollyUpdateReducer,

  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userDetails: userDetailsReducer,

  propertycreate: propertyCreateReducer,
  propertyList: propertyListReducer,
  propertyDetails: propertyDetailsReducer,
  propertyUpdate: propertyUpdateReducer,

});

export default rootReducer;
