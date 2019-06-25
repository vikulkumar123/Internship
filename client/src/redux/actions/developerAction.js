import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { tokenConfig } from "./authAction";
import { returnErrors } from "./errorAction";

export const getDevelopers = () => (dispatch, getState) => {
  dispatch(developerLoading());
  axios
    .get("/api/developers", tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ActionTypes.GET_DEVELOPERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const getDeveloper = id => (dispatch, getState) => {
  dispatch(developerLoading());
  axios
    .get(`/api/developers/edit/${id}`, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ActionTypes.GET_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const createDeveloper = developer => (dispatch, getState) => {
  axios
    .post("/api/developers/register", developer, tokenConfig(getState))
    .then(res => {
      console.log(res.data);
      dispatch({
        type: ActionTypes.CREATE_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editDeveloper = (id, developer) => (dispatch, getState) => {
  axios
    .put(`/api/developers/edit/${id}`, developer, tokenConfig(getState))

    .then(res => {
      dispatch({
        type: ActionTypes.EDIT_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const developerLoading = () => {
  return {
    type: ActionTypes.DEVELOPER_LOADING
  };
};

export const archiveDeveloper = (id, archive) => (dispatch, getState) => {
  axios
    .put(`/api/developers/dashboard/${id}`, archive, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: ActionTypes.ARCHIVE_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const blacklistDeveloper = (id, data) => (dispatch, getState) => {
  // console.log("Dispatch blacklist", data);
  axios
    .put(`/api/developers/dashboard/${id}`, data, tokenConfig(getState))
    .then(res => {
      // console.log("blacklist", res.data);
      dispatch({
        type: ActionTypes.BLACKLIST_DEVELOPER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
