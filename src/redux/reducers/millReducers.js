import {
  MILL_LIST_REQUEST,
  MILL_LIST_SUCCESS,
  MILL_LIST_FAIL,
  MILL_DETAILS_REQUEST,
  MILL_DETAILS_SUCCESS,
  MILL_DETAILS_FAIL,
  MILL_DELETE_REQUEST,
  MILL_DELETE_SUCCESS,
  MILL_DELETE_FAIL,
  MILL_CREATE_REQUEST,
  MILL_CREATE_SUCCESS,
  MILL_CREATE_FAIL,
  MILL_CREATE_RESET,
  MILL_UPDATE_REQUEST,
  MILL_UPDATE_SUCCESS,
  MILL_UPDATE_FAIL,
  MILL_UPDATE_RESET,
} from '../constants/millConstants';

export const millListReducer = (state = {}, action) => {
  switch (action.type) {
    case MILL_LIST_REQUEST:
      return { loading: true, data: [] };

      case MILL_LIST_SUCCESS:
        return { loading: false, vendors:action.payload.data.allVendors };
  
      case MILL_LIST_FAIL:
        return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const millDetailsReducer = (state = { vendor: {} }, action) => {
  switch (action.type) {
    case MILL_DETAILS_REQUEST:
      return { loading: true, ...state };

    case MILL_DETAILS_SUCCESS:
      return { loading: false, vendors:action.payload };

    case MILL_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const millDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MILL_DELETE_REQUEST:
      return { loading: true };

    case MILL_DELETE_SUCCESS:
      return { loading: false, success: true };

    case MILL_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const millCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MILL_CREATE_REQUEST:
      return { loading: true };

    case MILL_CREATE_SUCCESS:
      return { loading: false, success: true, mill: action.payload };

    case MILL_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case MILL_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const millUpdateReducer = (state = { mill: {} }, action) => {
  switch (action.type) {
    case MILL_UPDATE_REQUEST:
      return { loading: true };

    case MILL_UPDATE_SUCCESS:
      return { loading: false, success: true, mill: action.payload };

    case MILL_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case MILL_UPDATE_RESET:
      return { mill: {} };

    default:
      return state;
  }
};
