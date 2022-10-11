import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SavedShows from "../../components/addFavorite";

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

  const handleSMS = () => {
    axios.get("http://127.0.0.1:3001/sendSMS");
  };

  return (
    <>
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>

      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>

      <button onClick={handleSMS}>Send SMS</button>
    </div>
    <div className='w-full text-white'>
      <h1 className="text-3xl md:5xl font-bold">Liked Shows</h1>
    </div>
    <SavedShows />
    </>
  );
};

export default Account;
