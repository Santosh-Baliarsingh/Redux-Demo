const redux = require("redux");
const createStore = redux.createStore;
const thunkMiddlware = require("redux-thunk").default;
const axios = require("axios");
const applyMiddleware = redux.applyMiddleware;

// Inital Data
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Action Creators
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCESSED = "FETCH_USERS_SUCCESSED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// Define Action Creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESSED,
    payload: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

// Define Reducer Function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESSED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

// Store Creation
const store = createStore(reducer, applyMiddleware(thunkMiddlware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUser());
