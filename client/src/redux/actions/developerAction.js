import * as ActionTypes from "./actionTypes";

export const getDevelopers = () => {
  return {
    type: ActionTypes.GET_DEVELOPERS
  };
};

export const createDeveloper = developer => {
  return {
    type: ActionTypes.CREATE_DEVELOPER,
    payload: developer
  };
};
