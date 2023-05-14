// store.js

import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers/reducers';

const middleware = [thunkMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware: middleware,
});

export default store;
