import api from '../services/api.js';
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
  VENDOR_APPROVE_REQUEST,
  VENDOR_APPROVE_SUCCESS,
  VENDOR_APPROVE_FAIL,
  VENDOR_CREATE_REQUEST,
  VENDOR_CREATE_SUCCESS,
  VENDOR_CREATE_FAIL,
  VENDOR_UPDATE_REQUEST,
  VENDOR_UPDATE_SUCCESS,
  VENDOR_UPDATE_FAIL,
} from '../constants/vendorConstants';

export const listVendors = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENDOR_LIST_REQUEST,
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
      type: VENDOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const listVendorDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: VENDOR_DETAILS_REQUEST });
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
      type: VENDOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const deleteVendor = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENDOR_DELETE_REQUEST,
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

    const { data } = await api.delete(`/v1/vendors/${id}/`, config);

    dispatch({
      type: VENDOR_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const createVendor = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENDOR_CREATE_REQUEST,
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

    const { data } = await api.post(`/vendors/create/`, {}, config);
    dispatch({
      type: VENDOR_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const updateVendor = (vendor) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENDOR_UPDATE_REQUEST,
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

    const { data } = await api.put(`/vendors/update/${vendor._id}/`, vendor, config);
    dispatch({
      type: VENDOR_UPDATE_SUCCESS,
      payload: data,
    });

    dispatch({
      type: VENDOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
export const approveVendor = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: VENDOR_APPROVE_REQUEST,
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

    const { data } = await api.put(`/v1/approve/${id}/`, config);

    dispatch({
      type: VENDOR_APPROVE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: VENDOR_APPROVE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
