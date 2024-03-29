import {
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_RESET,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_RESET,
  BLOG_DELETE_REQUEST,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_RESET,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_RESET,
} from '../constants/blogConstants';

export const blogCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return {
        loading: true,
      };

    case BLOG_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        blog: action.payload,
      };

    case BLOG_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case BLOG_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const blogListReducer = (state = { }, action) => {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true };

    case BLOG_LIST_SUCCESS:
      return { loading: false, blogs:action.payload.data.allBlogs };

    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    case BLOG_LIST_RESET:
      return { blogs: [] };

    default:
      return state;
  }
};
export const blogDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };

    case BLOG_DELETE_SUCCESS:
      return { loading: false, success: true };

    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const blogDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return {  loading: true , data: []};

    case BLOG_DETAILS_SUCCESS:
      return { loading: false, blog: action.payload.data.blog };

    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    case BLOG_DETAILS_RESET:
      return { blog: {} };

    default:
      return state;
  }
};

export const blogUpdateReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };

    case BLOG_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case BLOG_UPDATE_RESET:
      return { blog: {} };

    default:
      return state;
  }
};
