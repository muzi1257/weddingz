import api from '../services/api.js';

import {
  TROLLY_CREATE_REQUEST,
  TROLLY_CREATE_SUCCESS,
  TROLLY_CREATE_FAIL,
  TROLLY_LIST_REQUEST,
  TROLLY_LIST_SUCCESS,
  TROLLY_LIST_FAIL,
  TROLLY_DELETE_REQUEST,
  TROLLY_DELETE_SUCCESS,
  TROLLY_DELETE_FAIL,
  TROLLY_UPDATE_REQUEST,
  TROLLY_UPDATE_SUCCESS,
  TROLLY_UPDATE_FAIL,
  TROLLY_DETAILS_REQUEST,
  TROLLY_DETAILS_SUCCESS,
  TROLLY_DETAILS_FAIL,
  TROLLY_DETAILS_RESET,
} from '../constants/trollyConstants';

export const createTrolly = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TROLLY_CREATE_REQUEST,
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

    formData.append('mill', data.mill);
    // if (data.image[0] && data.recieving_slip[0] && data.wight_slip[0]) {
    //   formData.append('image', data.image[0]);
    //   formData.append('recieving_slip', data.recieving_slip[0]);
    //   formData.append('wight_slip', data.wight_slip[0]);
    // }
    const res = await api.post(`/trolly/create/`, formData, config);
    dispatch({
      type: TROLLY_CREATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TROLLY_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const listTrollys = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TROLLY_LIST_REQUEST,
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

    const { data } = await api.get(`/trolly/`, config);
    dispatch({
      type: TROLLY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TROLLY_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const deleteTrolly = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TROLLY_DELETE_REQUEST,
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

    const { data } = await api.delete(`/trolly/delete/${id}/`, config);

    dispatch({
      type: TROLLY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TROLLY_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateTrolly = (trolly) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TROLLY_UPDATE_REQUEST,
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
      `/trolly/update/${trolly._id}/`,
      trolly,
      config
    );

    dispatch({
      type: TROLLY_UPDATE_SUCCESS,
    });

    dispatch({
      type: TROLLY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TROLLY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getTrollyDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TROLLY_DETAILS_REQUEST,
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

    const { data } = await api.get(`/trolly/${id}/`, config);

    dispatch({
      type: TROLLY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TROLLY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
