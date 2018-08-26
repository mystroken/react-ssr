import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import Routes from '../common/routes';
import renderer from './renderer';
import createStore from './createStore';
import {
  API_HOST,
  API_PATH,
  HOST,
  PORT
} from '../common/shared/constants';


const app = express();

app.use('/api/',
  proxy(API_HOST, {

    proxyReqOptDecorator: (proxyReqOpts) => {
      proxyReqOpts.headers['X-Forwarded-Host'] = `${HOST}:${PORT}`; // eslint-disable-line
      return proxyReqOpts;
    },

    proxyReqPathResolver: (req) => {
      const urlPath = /^\//.test(API_PATH) ? API_PATH.slice(0, -1) : API_PATH;
      return `${urlPath}${require('url').parse(req.url).path}`;
    }

  }));

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  const matchingRoutes = matchRoutes(Routes, req.path);

  const promises = matchingRoutes
    .map(({ route }) => {
      return route.loadData
        ? route.loadData(store)
        : Promise.resolve(null);
    })
    .map((promise) => { // eslint-disable-line
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    if (context.url) {
      return res.redirect(301, context.url);
    }

    return res.send(content);
  });
});


app.listen(PORT, HOST, () => {
  console.log(`Listening ${HOST} : ${PORT}`); // eslint-disable-line
});
