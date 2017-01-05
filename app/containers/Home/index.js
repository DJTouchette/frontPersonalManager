/*
 *
 * Home
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHome from './selectors';
import { getTodos } from './actions';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{JSON.stringify(this.props.todos)}</p>
      </div>
    );
  }
}

const mapStateToProps = selectHome();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getTodos: () => dispatch(getTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
