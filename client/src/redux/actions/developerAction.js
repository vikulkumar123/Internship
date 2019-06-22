import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const getDevelopers = () => dispatch => {
  dispatch(developerLoading());
  axios.get("/developers").then(res =>
    dispatch({
      type: ActionTypes.GET_DEVELOPERS,
      payload: res.data
    })
  );
};

export const createDeveloper = developer => {
  return {
    type: ActionTypes.CREATE_DEVELOPER,
    payload: developer
  };
};

export const developerLoading = () => {
  return {
    type: ActionTypes.DEVELOPER_LOADING
  };
};

export const editDeveloper = developer => {
  return {
    type: ActionTypes.EDIT_DEVELOPER,
    payload: developer
  };
};
