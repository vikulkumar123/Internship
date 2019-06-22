import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const getDevelopers = () => dispatch => {
  dispatch(developerLoading());
  axios.get("/api/developers").then(res =>
    dispatch({
      type: ActionTypes.GET_DEVELOPERS,
      payload: res.data
    })
  );
};

export const getDeveloper = id => dispatch => {
  dispatch(developerLoading());
  axios.get(`/api/developers/edit/${id}`).then(res => {
    console.log("Response" + res.data);
    dispatch({
      type: ActionTypes.GET_DEVELOPER,
      payload: res.data
    });
  });
};

export const createDeveloper = developer => dispatch => {
  axios.post("/api/developers/register", developer).then(res => {
    dispatch({
      type: ActionTypes.CREATE_DEVELOPER,
      payload: res.data
    });
  });
};

export const developerLoading = () => {
  return {
    type: ActionTypes.DEVELOPER_LOADING
  };
};

export const archiveDeveloper = archive => {
  return {
    type: ActionTypes.ARCHIVE_DEVELOPER,
    payload: archive
  };
};

export const blacklistDeveloper = blacklist => {
  return {
    type: ActionTypes.BLACKLIST_DEVELOPER,
    payload: blacklist
  };
};

export const editDeveloper = developer => {
  return {
    type: ActionTypes.EDIT_DEVELOPER,
    payload: developer
  };
};
