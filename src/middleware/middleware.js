// middleware.js

import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default applyMiddleware(thunkMiddleware);
