const redux = require("redux");
const createStore = redux.createStore;

// Initial State Of Cake
const initialCakeState = {
  numOfCake: 10,
};

// Action
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"; // new Action Added

//Action Creator function (orderCake) that returns an object
const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

//Action creator function(restoreCake )
const restoreCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

//Reducer
const reducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCake: state.numOfCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        numOfCake: state.numOfCake + action.payload,
      };
    default:
      return state;
  }
};

//Redux Store Creation
const store = createStore(reducer);

console.log("Initial State - ", store.getState()); // getState() Method will gives the initial state of our application that is = 10

const unsubscribe = store.subscribe(() => {
  console.log("Updated State - ", store.getState());
});

store.dispatch(orderCake()); // 9
store.dispatch(orderCake()); // 8
store.dispatch(orderCake()); // 7
store.dispatch(restoreCake(3)); // 10

unsubscribe();
