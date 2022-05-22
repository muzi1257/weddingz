import api from '../services/api.js';
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
  MILL_UPDATE_REQUEST,
  MILL_UPDATE_SUCCESS,
  MILL_UPDATE_FAIL,
} from '../constants/millConstants';

export const listMills = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MILL_LIST_REQUEST,
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

    const { data } = await api.get(`/v1/vendors/`, config);
    dispatch({
      type: MILL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MILL_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listMillDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MILL_DETAILS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await api.get(`/v1/vendors/${id}`, config);
    dispatch({
      type: MILL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MILL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteMill = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MILL_DELETE_REQUEST,
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

    const { data } = await api.delete(`/v1/vendors/delete/${id}/`, config);

    dispatch({
      type: MILL_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MILL_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createMill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MILL_CREATE_REQUEST,
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

    const { data } = await api.post(`/mills/create/`, {}, config);
    dispatch({
      type: MILL_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MILL_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateMill = (mill) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MILL_UPDATE_REQUEST,
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

    const { data } = await api.put(`/mills/update/${mill._id}/`, mill, config);
    dispatch({
      type: MILL_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: MILL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MILL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
