import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  errMessage: null,
  developer: null,
  developers: []
};

const developers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DEVELOPER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case ActionTypes.CREATE_DEVELOPER:
      console.log(" Developer", action.payload);
      return {
        ...state,
        developers: [action.payload, ...state.developers]
      };

    case ActionTypes.GET_DEVELOPERS:
      return {
        ...state,
        developers: action.payload,
        isLoading: false
      };

    case ActionTypes.GET_DEVELOPER:
      return {
        ...state,
        developer: action.payload,
        isLoading: false
      };

    case ActionTypes.SEARCH_DEVELOPER:
      return {
        ...state,
        developer: action.payload
      };

    case ActionTypes.DEVELOPER_FAILED:
      return {
        ...state,
        errMessage: action.payload
      };

    case ActionTypes.EDIT_DEVELOPER:
      return {
        ...state,
        developer: action.payload
      };

    case ActionTypes.ARCHIVE_DEVELOPER:
      return {
        ...state,
        developer: action.payload
      };

    case ActionTypes.BLACKLIST_DEVELOPER:
      return {
        ...state,
        developer: action.payload
      };

    default:
      return state;
  }
};

export default developers;
