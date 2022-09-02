const createSlice = require("@redux/toolkit").createSlice;

// initial State
const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducer: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

 module.export = cakeSlice.reducer; // default export
 module.export.cakeActions = cakeSlice.actions // named export