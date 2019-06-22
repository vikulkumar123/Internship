import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  errMessage: null,
  developers: [
    {
      id: 1,
      firstname: "Shubham",
      lastname: "Singh",
      skills: ["bootstrap", "html"],
      score: 10,
      experience: 2,
      devCategory: "Consultant",
      location: "Gandhinagar",
      availability: 6,
      costPerHour: 2000,
      email: "sadsad@gmail.com",
      phone: "911964656",
      resume: "Submitted"
    },
    {
      id: 2,
      firstname: "Shubham",
      lastname: "Singh",
      skills: ["bootstrap", "html"],
      score: 10,
      experience: 2,
      devCategory: "Consultant",
      location: "Gandhinagar",
      availability: 6,
      costPerHour: 2000,
      email: "sadsad@gmail.com",
      phone: "911964656",
      resume: "Submitted"
    }
  ],
  developer: null
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
        developers: [...state.developers]
      };

    case ActionTypes.GET_DEVELOPER:
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
        developers: action.payload
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
