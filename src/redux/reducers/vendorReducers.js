import {
  VENDOR_LIST_REQUEST,
  VENDOR_LIST_SUCCESS,
  VENDOR_LIST_FAIL,
  VENDOR_DETAILS_REQUEST,
  VENDOR_DETAILS_SUCCESS,
  VENDOR_DETAILS_FAIL,
  VENDOR_DELETE_REQUEST,
  VENDOR_DELETE_SUCCESS,
  VENDOR_DELETE_FAIL,
  VENDOR_CREATE_REQUEST,
  VENDOR_CREATE_SUCCESS,
  VENDOR_CREATE_FAIL,
  VENDOR_CREATE_RESET,
  VENDOR_UPDATE_REQUEST,
  VENDOR_UPDATE_SUCCESS,
  VENDOR_UPDATE_FAIL,
  VENDOR_UPDATE_RESET,
} from '../constants/vendorConstants';

export const vendorListReducer = (state = {}, action) => {
  switch (action.type) {
    case VENDOR_LIST_REQUEST:
      return { loading: true, data: [] };

      case VENDOR_LIST_SUCCESS:
        return { loading: false, vendors:action.payload.data.allVendors };
  
      case VENDOR_LIST_FAIL:
        return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const vendorDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case VENDOR_DETAILS_REQUEST:
      return { loading: true, data:[] };

    case VENDOR_DETAILS_SUCCESS:
      return { loading: false, vendor:action.payload.data.vendor};

    case VENDOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const vendorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case VENDOR_DELETE_REQUEST:
      return { loading: true };

    case VENDOR_DELETE_SUCCESS:
      return { loading: false, success: true };

    case VENDOR_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const vendorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VENDOR_CREATE_REQUEST:
      return { loading: true };

    case VENDOR_CREATE_SUCCESS:
      return { loading: false, success: true, vendor: action.payload };

    case VENDOR_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case VENDOR_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const vendorUpdateReducer = (state = { vendor: {} }, action) => {
  switch (action.type) {
    case VENDOR_UPDATE_REQUEST:
      return { loading: true };

    case VENDOR_UPDATE_SUCCESS:
      return { loading: false, success: true, vendor: action.payload };

    case VENDOR_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case VENDOR_UPDATE_RESET:
      return { vendor: {} };

    default:
      return state;
  }
};
