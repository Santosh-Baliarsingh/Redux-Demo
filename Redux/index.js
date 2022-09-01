const redux = require("redux");
const createStore = redux.createStore;

// Initial State Of Cake
const initialCakeState = {
  numOfCake: 10,
};

// Action
const CAKE_ORDERED = "CAKE_ORDERED";

//Action Creator function that returns an object
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

//Reducer
const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

//Redux Store Creation
const store = createStore(reducer);

console.log("Initial State - ", store.getState()); // getState() Method will gives the initial state of our application that is = 10

const unsubscribe = store.subscribe (() => {
  console.log("Updated State - ", store.getState())
});

store.dispatch(orderCake()); // 9
store.dispatch(orderCake()); // 8
store.dispatch(orderCake()); // 7

unsubscribe();

//Note - 
/* Action
------
- Action is the only way our application can interact with the store.
- It carry some information from our app to the redux store.
- It is plain Javascript Object.
- It has  a 'type' property that describes something that happend in the application.
- The 'type' property is typically defined as a string  constants.

 */

/* Reducers
--------
- Reducers specify how the  app's  state changes in response to action sent to the store.
- Reducers is a Plain javascript function that accepts previous state and action as an arguments and returns the updated state of the application. */

/* Store
------
- One Store for the entire application.
Responsibility -
 1. It holds application state.
 2. it allows access to state via 'getState()' Method.
 3. It provides 'dispatch(action)' Method to Update the state Data.
    - dispatch() method accepts 'action' as an Argument.
 4. Store allows our application to register listeners through 'subscribe(listener)' Method.
    - The 'subscribe()' Method accepts a function as an argument which is executed any time the state in the redux store changes.
 5. we can unsubscribe teh store by calling the function that was returned by the 'subscribe(listener)'
    Method.  */
