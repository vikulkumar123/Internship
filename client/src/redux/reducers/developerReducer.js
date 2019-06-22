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
      return {
        ...state,
        developers: [...state.developers, action.payload]
      };

    case ActionTypes.GET_DEVELOPERS:
      return {
        ...state,
        developers: action.payload,
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
        developer: { ...state.developer, archive: action.payload }
      };

    case ActionTypes.BLACKLIST_DEVELOPER:
      return {
        ...state,
        developer: { ...state.developer, blacklist: action.payload }
      };

    default:
      return state;
  }
};

export default developers;
