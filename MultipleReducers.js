const redux = require("redux"); // import redux
const createStore = redux.createStore; // import redux store
const bindActionCreators = redux.bindActionCreators; //Import bindActionCreators method

// Initial State Of Cake
const initialCakeState = {
  numOfCake: 10,
};

// Actions for Cake
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//Action Creator function (orderCake) that returns an object
const orderCake = (qty = 1) => {
  return {
    type: CAKE_ORDERED,
    payload: qty,
  };
};

//Action creator function(restoreCake)
const restoreCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

//Reducer for Cake
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCake: state.numOfCake + action.payload,
      };
    default:
      return state;
  }
};

// Initial State For IceCream
const initialIceCreamState = {
  numOfIceCream: 20,
};

// Actions For IceCream
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action Creator function (Order IceCream)
const orderIceCream = (qty = 1) => {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
};

// Action Creator Function for (Restock IceCream)
const restorIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

// Reducer For IceCream
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
    default:
      return state;
  }
};

//Redux Store Creation for Cake
const cakeStore = createStore(cakeReducer);

console.log("Initial State of Cake  - ", cakeStore.getState()); // getState() Method will gives the initial state of our application that is = 10

const cakeUnsubscribe = cakeStore.subscribe(() => {
  console.log("Updated State of Cake  - ", cakeStore.getState());
});

// bindActionCreators() Method for Cake
const cakeAction = bindActionCreators(
  { orderCake, restoreCake },
  cakeStore.dispatch
);
// in bindActionCreators({action creators, action creators}, what we want to bind)
cakeAction.orderCake(); // 9
cakeAction.orderCake(); // 8
cakeAction.orderCake(); // 7
cakeAction.restoreCake(3); // 10

cakeUnsubscribe();

// Redux Store Creation for IceCream
const iceCreamStore = createStore(iceCreamReducer);

console.log("Initial State of Ice-Cream  - ", iceCreamStore.getState()); // getState() Method will gives the initial state of our application that is = 20

const iceCreamUnsubscribe = iceCreamStore.subscribe(() => {
  console.log("Updated State of Ice-Cream  - ", iceCreamStore.getState());
});

// bindActionCreators() Method for Ice-Cream
const iceCreamAction = bindActionCreators(
  { orderIceCream, restorIceCream },
  iceCreamStore.dispatch
);

iceCreamAction.orderIceCream(); // 19
iceCreamAction.orderIceCream(); // 18
iceCreamAction.orderIceCream(); // 17
iceCreamAction.restorIceCream(10); // (17 + 10) = 27

iceCreamUnsubscribe();
