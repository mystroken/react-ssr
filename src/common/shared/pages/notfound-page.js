import React from 'react';
import PropTypes from 'prop-types';

import Page from './page';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true; // eslint-disable-line no-param-reassign

  return (
    <Page>
      <div className='container'>
        <h1>Ooops nothing was found!</h1>
      </div>
    </Page>
  );
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.object
};

export default {
  component: NotFoundPage
};
