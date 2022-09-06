const store = require("./app/store"); //  import the store from store.js
const { cakeActions } = require("./features/cake/cakeSlice"); // Import named cakeActions from CakeSlice
const { iceCreamActions } = require("./features/iceCream/iceCreamSlice"); // Imported Named IceCreamActions from IceCreamSlice
const { fetchUser } = require("./features/user/userSlice"); //Imported fetchUser Thunk

// Log the Initial State of Cake and IceCream
console.log("Initial State of Features are -", store.getState());

// Log the Updated State of Cake and IceCream After Changes
// const unsubscribe = store.subscribe(() => {
//   console.log("Updated State of Features are -", store.getState());
// });

// Logger Middleware
// const unsubscribe = store.subscribe(() => {});

// Dispatch Actions for Cake
// store.dispatch(cakeActions.ordered()); // 9
// store.dispatch(cakeActions.ordered()); // 8
// store.dispatch(cakeActions.ordered()); // 7
// store.dispatch(cakeActions.restocked(10)); // 17

// // Dispatch Actions for Ice-Cream
// store.dispatch(iceCreamActions.ordered()); //19
// store.dispatch(iceCreamActions.ordered()); //18
// store.dispatch(iceCreamActions.ordered()); //17
// store.dispatch(iceCreamActions.restocked(10)); // 27

store.dispatch(fetchUser());

// unsubscribe();
