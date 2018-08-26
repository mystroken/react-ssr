import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {

  render() {
    const {
      children
    } = this.props;

    return (
      <main>
        {children}
      </main>
    );
  }
}

Page.propTypes = {
  children: PropTypes.any
};

export default Page;
