import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { capitalizeFirstLetter } from "../../../helper/string";
import { warningAlertWithConfirmation, successAlert } from "../../../helper/alert";
import axios from "axios";
import EmptyUser from "../../../assets/user_icon.jpg";

const FriendList = () => {
  const userId = useSelector((state) => state.user.id);
  const [friendList, setFriendList] = useState([]);

  const getUserFriendList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/friend/get/${userId}`,
      );
      setFriendList(response.data.result);
    } catch (error) {
      console.error("Error fetching friend list", error);
    }
  };

  const deleteFunction = async (friendId) => {
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/friend/remove/${userId}/${friendId}`,
    );
  };

  const handleRemoveFriend = async (friendId) => {
    try {
      const confirmed = await warningAlertWithConfirmation();
      if (confirmed) {
        await deleteFunction(friendId);
        await successAlert("Success")
        await getUserFriendList();
      }
    } catch (error) {
      console.log("ini error delete", error);
    }
  };

  useEffect(() => {
    getUserFriendList();
  }, []);

  return (
    <>
      {friendList.length > 0 ? (
        friendList.map((friend) => (
          <div
            key={friend.id}
            className="my-2 flex items-center rounded-xl border-2 border-slate-600 px-6 py-2"
          >
            <img
              src={
                friend.profile_picture
                  ? `${process.env.REACT_APP_AVATAR_BASE_URL}/${friend.profile_picture}`
                  : EmptyUser
              }
              className="h-14 w-14 overflow-hidden rounded-full"
              alt="Profile"
            />

            <div className="ml-4 flex w-10/12 items-end">
              <div>
                <p className="p-0 font-helvetica text-sm text-primaryBlue">
                  {capitalizeFirstLetter(friend.first_name)}{" "}
                  {capitalizeFirstLetter(friend.last_name)}
                </p>
                <p className="p-0 font-helvetica text-xs text-primaryYellow">
                  uid: {friend.uid}
                </p>
              </div>
              <p className="ml-auto hidden items-center p-0 font-helvetica text-xs text-slate-300 md:flex">
                <ChatBubbleOvalLeftEllipsisIcon className="mr-2 h-3 w-3" />
                {friend.status}
              </p>
            </div>
            <button
              className="ml-auto h-7 w-7 text-red-700 transition duration-200 hover:text-red-800"
              onClick={() => handleRemoveFriend(friend.friend_id)}
            >
              <TrashIcon />
            </button>
          </div>
        ))
      ) : (
        <div className="my-10">
          <p className="font-actor text-center text-2xl text-slate-400">You have no friends</p>
        </div>
      )}
    </>
  );
};

export default FriendList;
