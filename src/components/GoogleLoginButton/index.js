import React from "react";
import GoogleLogin from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function GoogleLoginButton() {
  return (
    <React.Fragment>
      <GoogleLogin
        clientId="374041413022-1bmtkoqnoiosuen3kic3bqkfevsqs89p.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </React.Fragment>
  );
}

export default GoogleLoginButton;
