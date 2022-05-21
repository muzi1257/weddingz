import api from '../services/api.js';

import {
  PROPERTY_CREATE_REQUEST,
  PROPERTY_CREATE_SUCCESS,
  PROPERTY_CREATE_FAIL,
  PROPERTY_LIST_REQUEST,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DELETE_REQUEST,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
  PROPERTY_UPDATE_REQUEST,
  PROPERTY_UPDATE_SUCCESS,
  PROPERTY_UPDATE_FAIL,
  PROPERTY_DETAILS_REQUEST,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_DETAILS_RESET,
} from '../constants/propertyConstants';

export const createProperty =
  (name, type, longitude, latitude, address, createdAt) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: PROPERTY_CREATE_REQUEST,
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

      const { data } = await api.post(
        '/property/create/',
        {
          name: name,
          type: type,
          longitude: longitude,
          latitude: latitude,
          address: address,
          createdAt: createdAt,
        },
        config
      );

      dispatch({
        type: PROPERTY_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PROPERTY_CREATE_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const listProperties = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_LIST_REQUEST,
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

    const { data } = await api.get(`/property/`, config);

    dispatch({
      type: PROPERTY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteProperty = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_DELETE_REQUEST,
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

    const { data } = await api.delete(`/porperty/delete/${id}/`, config);

    dispatch({
      type: PROPERTY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateProperty = (property) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_UPDATE_REQUEST,
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
      `/property/update/${property._id}/`,
      property,
      config
    );

    dispatch({
      type: PROPERTY_UPDATE_SUCCESS,
    });

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getPropertyDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROPERTY_DETAILS_REQUEST,
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

    const { data } = await api.get(`/property/${id}/`, config);

    dispatch({
      type: PROPERTY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
