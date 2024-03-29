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
  venueFeatureReducer,
  venueCreateReducer,
  venueUpdateReducer,
} from './venueReducers';
import {
  blogListReducer,
  blogDetailsReducer,
  blogDeleteReducer,
  blogCreateReducer,
  blogUpdateReducer,
} from './blogReducers';


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
  venueFeature: venueFeatureReducer,
  

  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  blogDelete: blogDeleteReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,

  userLogin: userLoginReducer,
  userCreate: userCreateReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userDetails: userDetailsReducer,

  
});

export default rootReducer;
