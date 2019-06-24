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
  axios
    .get(`/api/developers/edit/${id}`)
    .then(res => {
      dispatch({
        type: ActionTypes.GET_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const createDeveloper = developer => dispatch => {
  axios
    .post("/api/developers/register", developer)
    .then(res => {
      dispatch({
        type: ActionTypes.CREATE_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const editDeveloper = (id, developer) => dispatch => {
  axios
    .put(`/api/developers/edit/${id}`, developer)
    .then(res => {
      dispatch({
        type: ActionTypes.EDIT_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const developerLoading = () => {
  return {
    type: ActionTypes.DEVELOPER_LOADING
  };
};

export const archiveDeveloper = (id, archive) => dispatch => {
  axios
    .put(`/api/developers/dashboard/${id}`, archive)
    .then(res => {
      dispatch({
        type: ActionTypes.ARCHIVE_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const blacklistDeveloper = (id, blacklist) => dispatch => {
  axios
    .put(`/api/developers/dashboard/${id}`, blacklist)
    .then(res => {
      dispatch({
        type: ActionTypes.BLACKLIST_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
