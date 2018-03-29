import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {
  componentDidMount() {
    console.log('App mounting auth =', this.props.auth);
    if (!this.props.auth) {
      this.props.fetchUser();
    }
  }
  render() {
    console.log(this.props.auth);
    return <div className="container">{this.props.children}</div>;
  }
}

const mapStateToProps = state => (
  {
    auth: state.auth
  }
)

// const mapActionsToProps = dispatch => {
//   return {
//     fetch_user: dispatch(actions.fetch_user())
//   };
// };

export default connect(mapStateToProps, actions)(App);
