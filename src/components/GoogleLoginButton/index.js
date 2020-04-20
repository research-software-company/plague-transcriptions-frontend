import React from "react";
import GoogleLogin from "react-google-login";
import store from "../../Store";
import { withRouter } from "react-router-dom";

const GoogleLoginButton = withRouter(
  class GoogleLoginButton extends React.Component {
    successCallback(response, next) {
      store.state.auth.loggedIn = response;
      if (next) {
        this.props.history.push(`/${next}`);
      }
    }

    failureCallback(response) {
      debugger;
    }
    render() {
      return (
        <React.Fragment>
          <GoogleLogin
            clientId="374041413022-1bmtkoqnoiosuen3kic3bqkfevsqs89p.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={function (response) {
              this.successCallback(response, this.props.next);
            }.bind(this)}
            onFailure={this.failureCallback}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </React.Fragment>
      );
    }
  }
);

export default GoogleLoginButton;
