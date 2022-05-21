import {
  PROPERTY_CREATE_REQUEST,
  PROPERTY_CREATE_SUCCESS,
  PROPERTY_CREATE_FAIL,
  PROPERTY_CREATE_RESET,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_LIST_RESET,
  PROPERTY_DELETE_REQUEST,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
  PROPERTY_UPDATE_REQUEST,
  PROPERTY_UPDATE_SUCCESS,
  PROPERTY_UPDATE_FAIL,
  PROPERTY_UPDATE_RESET,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DETAILS_RESET,
} from '../constants/propertyConstants';

export const propertyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_CREATE_REQUEST:
      return {
        loading: true,
      };

    case PROPERTY_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };

    case PROPERTY_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PROPERTY_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const propertyListReducer = (state = { properties: [] }, action) => {
  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return { loading: true };

    case PROPERTY_LIST_SUCCESS:
      return { loading: false, properties: action.payload };

    case PROPERTY_LIST_FAIL:
      return { loading: false, error: action.payload };

    case PROPERTY_LIST_RESET:
      return { properties: [] };

    default:
      return state;
  }
};
export const propertyDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_DELETE_REQUEST:
      return { loading: true };

    case PROPERTY_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PROPERTY_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const propertyDetailsReducer = (state = { property: {} }, action) => {
  switch (action.type) {
    case PROPERTY_DETAILS_REQUEST:
      return { ...state, loading: true };

    case PROPERTY_DETAILS_SUCCESS:
      return { loading: false, property: action.payload };

    case PROPERTY_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case PROPERTY_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const propertyUpdateReducer = (state = { property: {} }, action) => {
  switch (action.type) {
    case PROPERTY_UPDATE_REQUEST:
      return { loading: true };

    case PROPERTY_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case PROPERTY_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PROPERTY_UPDATE_RESET:
      return { property: {} };

    default:
      return state;
  }
};
