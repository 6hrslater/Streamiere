import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Account = () => {
  const { logOut, user } = UserAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user]);


  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
    </div>
  );
};

export default Account;
