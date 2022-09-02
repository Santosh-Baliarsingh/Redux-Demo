const createSlice = require("@reduxjs/toolkit").createSlice;

// initial State of Cake
const initialState = {
  numOfCakes: 10,
};

// Action and Reducer
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer; // default export
module.exports.cakeActions = cakeSlice.actions; // named export
