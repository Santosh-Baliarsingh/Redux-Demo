const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice"); // Cake reducer imported
const iceCreamReducer = require("../features/iceCream/iceCreamSlice"); // IceCream reducer imported

const logger = reduxLogger.createLogger();

// Redux-Toolkit Store Creation
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;

// Note :-
// 1 - In Redux if we have multiple reducer then we combine those reduers into a rootReducer.
// 2 - In Redux-Tookit configureStore() method will handle that
