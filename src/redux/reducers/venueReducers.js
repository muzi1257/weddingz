import {
  VENUE_CREATE_REQUEST,
  VENUE_CREATE_SUCCESS,
  VENUE_CREATE_FAIL,
  VENUE_CREATE_RESET,
  VENUE_LIST_REQUEST,
  VENUE_LIST_SUCCESS,
  VENUE_LIST_FAIL,
  VENUE_LIST_RESET,
  VENUE_DELETE_REQUEST,
  VENUE_DELETE_SUCCESS,
  VENUE_DELETE_FAIL,
  VENUE_UPDATE_REQUEST,
  VENUE_UPDATE_SUCCESS,
  VENUE_UPDATE_FAIL,
  VENUE_UPDATE_RESET,
  VENUE_DETAILS_REQUEST,
  VENUE_DETAILS_SUCCESS,
  VENUE_DETAILS_FAIL,
  VENUE_DETAILS_RESET,
} from '../constants/venueConstants';

export const venueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_CREATE_REQUEST:
      return {
        loading: true,
      };

    case VENUE_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        venue: action.payload,
      };

    case VENUE_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case VENUE_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const venueListReducer = (state = { }, action) => {
  switch (action.type) {
    case VENUE_LIST_REQUEST:
      return { loading: true };

    case VENUE_LIST_SUCCESS:
      return { loading: false, venues:action.payload.data.allVenues };

    case VENUE_LIST_FAIL:
      return { loading: false, error: action.payload };

    case VENUE_LIST_RESET:
      return { venues: [] };

    default:
      return state;
  }
};
export const venueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_DELETE_REQUEST:
      return { loading: true };

    case VENUE_DELETE_SUCCESS:
      return { loading: false, success: true };

    case VENUE_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const venueDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case VENUE_DETAILS_REQUEST:
      return {  loading: true , data: []};

    case VENUE_DETAILS_SUCCESS:
      return { loading: false, venue: action.payload.data.venue };

    case VENUE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case VENUE_DETAILS_RESET:
      return { venue: {} };

    default:
      return state;
  }
};

export const venueUpdateReducer = (state = { venue: {} }, action) => {
  switch (action.type) {
    case VENUE_UPDATE_REQUEST:
      return { loading: true };

    case VENUE_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case VENUE_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case VENUE_UPDATE_RESET:
      return { venue: {} };

    default:
      return state;
  }
};
