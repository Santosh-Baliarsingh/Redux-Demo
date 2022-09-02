const store = require("./app/store"); //  import the store from store.js
const { cakeActions } = require("./features/cake/cakeSlice"); // Import named cakeActions from CakeSlice

// Log the Initial State of Cake
console.log("Initial State of Cake is -", store.getState());


// Log the Updated State of Cake After Changes
const unsubscribe = store.subscribe(() => {
  console.log("Updated State of Cake is -", store.getState());
});

// Dispatch Actions
store.dispatch(cakeActions.ordered()); // 9
store.dispatch(cakeActions.ordered()); // 8
store.dispatch(cakeActions.ordered()); // 7
store.dispatch(cakeActions.restocked(10)); // 17

unsubscribe();
