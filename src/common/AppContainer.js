import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import NavBar from './shared/components/navbar';

const AppContainer = ({ route }) => {

  return (
    <div className='page__wrapper'>
      <NavBar />
      {renderRoutes(route.routes)}
    </div>
  );
};

AppContainer.propTypes = {
  route: PropTypes.object
};

export default {
  component: AppContainer
};
