const redux = require("redux"); // import redux
const createStore = redux.createStore; // import redux store
const bindActionCreators = redux.bindActionCreators; //Import bindActionCreators method
const combineReducers = redux.combineReducers;
const produce = require("immer").produce; // import combineReducers method
const reduxLogger = require("redux-logger"); // redux-logger Imported
const applyMiddleware = redux.applyMiddleware; // To add middleware we have to use 'applyMiddleware' function from redux

// Redux logger Created
const logger = reduxLogger.createLogger();

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
      return produce(state, (draft) => {
        draft.numOfCake = draft.numOfCake - 1;
      });
    case CAKE_RESTOCKED:
      return produce(state, (draft) => {
        draft.numOfCake = draft.numOfCake + action.payload;
      });
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
      return produce(state, (draft) => {
        draft.numOfIceCream = draft.numOfIceCream - 1;
      });
    case ICECREAM_RESTOCKED:
      return produce(state, (draft) => {
        draft.numOfIceCream = draft.numOfIceCream + action.payload;
      });
    default:
      return state;
  }
};

// Root Reducer for both cake and IceCream
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

//Redux Store Creation for Cake
const cakeStore = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State of Cake  - ", cakeStore.getState()); // getState() Method will gives the initial state of our application that is = 10

const cakeUnsubscribe = cakeStore.subscribe(() => {});

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
const iceCreamStore = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial State of Ice-Cream  - ", iceCreamStore.getState()); // getState() Method will gives the initial state of our application that is = 20

const iceCreamUnsubscribe = iceCreamStore.subscribe(() => {});

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

// Note :-
// 1 - Install redux-logger and import redux-logger
// 2 - import applyMiddleware function from redux . ln-7
// 3 - Create a logger using reduxLogger.createLogger(). ln-10
// 4 - Pass the applyMiddleware func as an argument to createStore and pass in the middlware to the applymiddleware method . ln-101 , ln-121
