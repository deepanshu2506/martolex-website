import React, { useCallback } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { GOOGLE_CLIENT_ID } from "../../config";
import { googleLogin, invalidLogin } from "../../redux/actions/authActions";
const GoogleSignIn = (props) => {
  const dispatch = useDispatch();
  const onSuccess = useCallback(
    (res) => {
      console.log(res.tokenId);
      dispatch(googleLogin(res.tokenId));
    },
    [dispatch]
  );
  const onFailure = useCallback(
    (res) => {
      dispatch(invalidLogin(res.error));
    },
    [dispatch]
  );
  return (
    <GoogleLogin
      className={`w-100 text-dark ${props.className}`}
      clientId={GOOGLE_CLIENT_ID}
      buttonText="LOGIN WITH GOOGLE"
      isSignedIn
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleSignIn;
