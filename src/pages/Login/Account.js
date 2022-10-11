import React, { useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SavedShows from "../../components/saveShows";

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
    window.scroll(0, 0);
    if (!user) {
      history.push("/login");
    }
  }, [user]);


  return (
    <>
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Welcome {user?.displayName}</h1>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
    <div className='w-full text-white'>
      <h1 className="text-3xl md:5xl font-bold">Liked Shows</h1>
    </div>
    <SavedShows />
    </>
  );
};

export default Account;
