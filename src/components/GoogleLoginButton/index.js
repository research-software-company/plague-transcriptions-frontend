import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import store from "../../Store";
import { observer } from "mobx-react";

const GoogleLoginButton = 
  class GoogleLoginButton extends React.Component {
    successCallback(response, next) {
      store.state.auth.loggedIn = response;
    }

    logout() {
        store.state.auth.loggedIn = false
    }

    failureCallback(response) {
      debugger;
    }

    render() {
      const loggedIn = store.state.auth.loggedIn;
      
      const googleLink = !loggedIn ? (
        <GoogleLogin
          clientId="374041413022-1bmtkoqnoiosuen3kic3bqkfevsqs89p.apps.googleusercontent.com"
          render={(renderProps) => (
            <span onClick={renderProps.onClick} style={{cursor:'pointer'}}>כניסה</span>
          )}
          buttonText="Login with Google"
          onSuccess={function (response) {
            this.successCallback(response, this.props.next);
          }.bind(this)}
          onFailure={this.failureCallback}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      ) : (
        <GoogleLogout
          clientId="374041413022-1bmtkoqnoiosuen3kic3bqkfevsqs89p.apps.googleusercontent.com"
          render={(renderProps) => (
            <span onClick={renderProps.onClick} style={{cursor:'pointer'}}>יציאה</span>
          )}
          onLogoutSuccess={this.logout.bind(this)}
        ></GoogleLogout>
      );
      const userImg = store.state.auth.loggedIn && store.state.auth.loggedIn.profileObj.imageUrl && <img style={{width:'40px', height:'40px', borderRadius: '50%'}} src={store.state.auth.loggedIn.profileObj.imageUrl} alt="Logged in user"/>
      
      return <React.Fragment>
          
          {googleLink}
          {userImg}
          </React.Fragment>;
    }
  }
;

export default observer(GoogleLoginButton);
