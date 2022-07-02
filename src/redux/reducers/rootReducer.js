import { combineReducers } from 'redux';
import {
  userCreateReducer,
  userListReducer,
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
} from './userReducers';

import {
  vendorListReducer,
  vendorDetailsReducer,
  vendorDeleteReducer,
  vendorApproveReducer,
  vendorCreateReducer,
  vendorUpdateReducer,
} from './vendorReducers';
import {
  venueListReducer,
  venueDetailsReducer,
  venueDeleteReducer,
  venueCreateReducer,
  venueUpdateReducer,
} from './venueReducers';


const rootReducer = combineReducers({

  vendorList: vendorListReducer,
  vendorDetails: vendorDetailsReducer,
  vendorDelete: vendorDeleteReducer,
  vendorApprove: vendorApproveReducer,
  vendorCreate: vendorCreateReducer,
  vendorUpdate: vendorUpdateReducer,

  venueList: venueListReducer,
  venueDetails: venueDetailsReducer,
  venueDelete: venueDeleteReducer,
  venueCreate: venueCreateReducer,
  venueUpdate: venueUpdateReducer,

  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userDetails: userDetailsReducer,

  
});

export default rootReducer;
