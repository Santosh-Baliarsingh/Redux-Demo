const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

// Initial State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// createAsyncThunk Will Generate pending , fulfilled, and rejected action types
const fetchUser = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.name));
});

// Action Creators
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true; // For pending State
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload; // For Fullfilled state
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message; // For Rejected State
    });
  },
});

module.exports = userSlice.reducer; // Default export the reducer
module.exports.fetchUser = fetchUser; // Named export the fetchUser() Function

// Note :-
// 1 - In Redux-Toolkit to create an async action we make use of createAsyncThunk() function

// 2 - The createAsyncThunk() accepts an action type as it's first argument and a callback as the second argument.

// 3 - The callback function contain the async logic and return a promise , createAsyncThunk  will dispatch the promise lifecycle action that we can listen to using extraReducers.

// 4 - The lifecycle includes 'Pending , fulfilled , rejected' . Pending when the requst is made , fullfilled when the request succeded and rejected when the request fails.

// 5 - Export the reducer as the default export and the fetchUser function as an named Export

// 6 - In store.js make sure to attach the reducer to the store and in Index.js dispatch the async action.
