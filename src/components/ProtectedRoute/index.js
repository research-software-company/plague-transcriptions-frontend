import React from 'react';

import store from '../../Store'
import { Redirect } from 'react-router-dom';

class protectedRoute extends React.Component {
  render() {
    const loggedIn = store.state.auth.loggedIn;
    const nextRoute = this.props.nextRoute
    const returnValue = loggedIn ? this.props.children : <Redirect
      to={{
        pathname: "/",
        state: { nextRoute: nextRoute }
      }}
    />

    return returnValue
  }

};

export default protectedRoute;