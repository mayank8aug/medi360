import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import mySaga from './sagas';

export default function createStoreWithMiddleware() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array
  const middleware = [sagaMiddleware];

  // Add the Redux dev tools and middleware code together
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(
    applyMiddleware(...middleware)
  );

  // Create a store with the reducers and middleware
  const store = createStore(reducers, enhancers);

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(mySaga);

  return store;
}