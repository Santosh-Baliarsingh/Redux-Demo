const redux = require("redux");
const produce = require("immer").produce; // import produce method from immer

const initialState = {
  name: "Santosh",
  address: {
    street: "123 Main Street",
    city: "Boston",
    state: "MA",
  },
};

// Action
const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default: {
      return state;
    }
  }
};

// Create Store
const store = redux.createStore(reducer);
console.log("Initial State is -", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State is -", store.getState());
});

store.dispatch(updateStreet("456 Main Street"));

unsubscribe();
