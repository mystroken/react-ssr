import React from 'react';

import Page from './page';
import { loadData, FeatureContainer } from '../../feature/Feature';

const HomePage = () => (
  <Page>
    <h1>Welcome to my React Server side rendered website</h1>
    <FeatureContainer />
  </Page>
);

export default {
  component: HomePage,
  loadData: (store) => loadData(store)
};
