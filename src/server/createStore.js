import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { URL } from 'url';
import reducers from '../common/reducers';

import {
  API_HOST,
  API_PATH
} from '../common/shared/constants';

export default (req) => {
  const baseURL = new URL(API_PATH, API_HOST).toString();
  const axiosInstance = axios.create({
    baseURL,
    headers: { cookie: req.get('cookie') || '' }
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
