const redux = require("redux"); // import redux
const createStore = redux.createStore; // import redux store
const bindActionCreators = redux.bindActionCreators; //Import bindActionCreators method

// Initial State Of Cake
const initialCakeState = {
  numOfCake: 10,
};

// Actions
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

// bindActionCreators() Method
const action = bindActionCreators({ orderCake, restoreCake }, store.dispatch);
// in bindActionCreators({action creators, action creators}, what we want to bind)
action.orderCake(); // 9
action.orderCake(); // 8
action.orderCake(); // 7
action.restoreCake(3); // 10

unsubscribe();
