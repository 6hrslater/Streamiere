import React, { useEffect } from "react";
import "./login.css";
import { GoogleButton } from "react-google-button";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Login = () => {
  const { googleSignIn, user } = UserAuth();
  const history = useHistory();

  const handleGoogleUser = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      history.push("/account");
    }
  }, [user]);

  return (
    <div>
      <GoogleButton onClick={handleGoogleUser} />
      <div>{user?.displayName}</div>
    </div>
  );
};

export default Login;
