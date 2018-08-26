import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from './action';

class Feature extends Component {

  static propTypes = {
    items: PropTypes.array
  };

  componentDidMount() {
    this.props.fetchData(); // eslint-disable-line
  }

  renderUsersList() {
    const { items } = this.props;
    return items.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    });
  }

  render() {
    return (
      <div>
        { this.renderUsersList() }
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => {
  return { items };
};

export const loadData = (store) => store.dispatch(fetchData());
export const FeatureContainer = connect(mapStateToProps, { fetchData })(Feature);
