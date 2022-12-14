const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

// Initial State of Ice-Cream
const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //Extra Reducer Added here
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer; // Default export for Reducer

module.exports.iceCreamActions = iceCreamSlice.actions; // Named Export for Actions
