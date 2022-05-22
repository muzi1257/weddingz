import {
  TROLLY_CREATE_REQUEST,
  TROLLY_CREATE_SUCCESS,
  TROLLY_CREATE_FAIL,
  TROLLY_CREATE_RESET,
  TROLLY_LIST_REQUEST,
  TROLLY_LIST_SUCCESS,
  TROLLY_LIST_FAIL,
  TROLLY_LIST_RESET,
  TROLLY_DELETE_REQUEST,
  TROLLY_DELETE_SUCCESS,
  TROLLY_DELETE_FAIL,
  TROLLY_UPDATE_REQUEST,
  TROLLY_UPDATE_SUCCESS,
  TROLLY_UPDATE_FAIL,
  TROLLY_UPDATE_RESET,
  TROLLY_DETAILS_REQUEST,
  TROLLY_DETAILS_SUCCESS,
  TROLLY_DETAILS_FAIL,
  TROLLY_DETAILS_RESET,
} from '../constants/trollyConstants';

export const trollyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case TROLLY_CREATE_REQUEST:
      return {
        loading: true,
      };

    case TROLLY_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        trolly: action.payload,
      };

    case TROLLY_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case TROLLY_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const trollyListReducer = (state = { }, action) => {
  switch (action.type) {
    case TROLLY_LIST_REQUEST:
      return { loading: true };

    case TROLLY_LIST_SUCCESS:
      return { loading: false, venues:action.payload.data.allVenues };

    case TROLLY_LIST_FAIL:
      return { loading: false, error: action.payload };

    case TROLLY_LIST_RESET:
      return { trollys: [] };

    default:
      return state;
  }
};
export const trollyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TROLLY_DELETE_REQUEST:
      return { loading: true };

    case TROLLY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case TROLLY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const trollyDetailsReducer = (state = { trolly: {} }, action) => {
  switch (action.type) {
    case TROLLY_DETAILS_REQUEST:
      return { ...state, loading: true };

    case TROLLY_DETAILS_SUCCESS:
      return { loading: false, trolly: action.payload };

    case TROLLY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case TROLLY_DETAILS_RESET:
      return { trolly: {} };

    default:
      return state;
  }
};

export const trollyUpdateReducer = (state = { trolly: {} }, action) => {
  switch (action.type) {
    case TROLLY_UPDATE_REQUEST:
      return { loading: true };

    case TROLLY_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case TROLLY_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case TROLLY_UPDATE_RESET:
      return { trolly: {} };

    default:
      return state;
  }
};
