import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { SearchFriends, FriendList } from "./components";

const FriendsPage = () => {
  const [openSearchFriends, setOpenSearchFriends] = useState(false);
  return (
    <div className="container-screen flex flex-col">
      <div className="flex items-center border-b-2 border-primaryBlue py-2 text-primaryBlue">
        <h1 className="font-helvetica text-xl text-primaryBlue">Friends</h1>
        <button
          className="ml-auto h-6 w-6 font-bold"
          onClick={() => setOpenSearchFriends(!openSearchFriends)}
        >
          <PlusIcon />
        </button>
      </div>
      {openSearchFriends && (
        <>
          <SearchFriends />
        </>
      )}
      {!openSearchFriends && (
        <>
          <FriendList />
        </>
      )}
    </div>
  );
};

export default FriendsPage;
