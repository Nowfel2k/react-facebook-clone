const request_list = [
  "Ashwath",
  "Prashant",
  "Hussain",
  "Hasan",
  "Jameel",
  "Ankit",
  "Anirudh",
  "Dhanush",
  "Lokesh",
  "Hari",
  "Khaja",
  "Hu Yuang",
];

export const initialState = {
  user: {
    displayName: "Liven Navfal",
    photoURL:
      "https://lh3.googleusercontent.com/a-/AOh14GiJ_kIfMBiP42oaOlOVQiIs_kKOo8XLnM689VQgQQ",
  },
  requests: [...request_list],
};

export const actionTypes = {
  SET_USER: "SET_USER",
  LOGOUT_USER: "LOGOUT_USER",
  REMOVE_REQUEST: "REMOVE_REQUEST",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    case actionTypes.REMOVE_REQUEST:
      return {
        ...state,
        requests: action.requests,
      };

    default:
      return state;
  }
};

export default reducer;
