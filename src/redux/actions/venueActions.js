import api from '../services/api.js';

import {
  VENUE_CREATE_REQUEST,
  VENUE_CREATE_SUCCESS,
  VENUE_CREATE_FAIL,
  VENUE_LIST_REQUEST,
  VENUE_LIST_SUCCESS,
  VENUE_LIST_FAIL,
  VENUE_DELETE_REQUEST,
  VENUE_DELETE_SUCCESS,
  VENUE_DELETE_FAIL,
  VENUE_UPDATE_REQUEST,
  VENUE_UPDATE_SUCCESS,
  VENUE_UPDATE_FAIL,
  VENUE_DETAILS_REQUEST,
  VENUE_DETAILS_SUCCESS,
  VENUE_DETAILS_FAIL,
  VENUE_DETAILS_RESET,
} from '../constants/venueConstants';

export const createVenue = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENUE_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'multipart/form-data',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const formData = new FormData();
    formData.append('number', data.number);

    formData.append('vendor', data.vendor);
    // if (data.image[0] && data.recieving_slip[0] && data.wight_slip[0]) {
    //   formData.append('image', data.image[0]);
    //   formData.append('recieving_slip', data.recieving_slip[0]);
    //   formData.append('wight_slip', data.wight_slip[0]);
    // }
    const res = await api.post(`/venue/create/`, formData, config);
    dispatch({
      type: VENUE_CREATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: VENUE_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const listVenues = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENUE_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await api.get(`/v1/venues/`, config);
    dispatch({
      type: VENUE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENUE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const deleteVenue = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENUE_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await api.delete(`/v1/venues/${id}/`, config);

    dispatch({
      type: VENUE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENUE_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateVenue = (venue) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENUE_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await api.put(
      `/venue/update/${venue._id}/`,
      venue,
      config
    );

    dispatch({
      type: VENUE_UPDATE_SUCCESS,
    });

    dispatch({
      type: VENUE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENUE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getVenueDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENUE_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await api.get(`/v1/getVenue/${id}/`, config);

    dispatch({
      type: VENUE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENUE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
