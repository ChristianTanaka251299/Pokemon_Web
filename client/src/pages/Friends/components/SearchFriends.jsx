import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../helper/string";
import { successAlert } from "../../../helper/alert";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import EmptyUser from "../../../assets/user_icon.jpg";

const SearchFriends = () => {
  const userId = useSelector((state) => state.user.id);
  const userUid = useSelector((state) => state.user.uid)
  const [searchInput, setSearchInput] = useState(""); // State for input value
  const [result, setResult] = useState(null); // State for search result
  const [friendList, setFriendList] = useState([])

  const findSearch = async (searchValue) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user/get/${searchValue}`
      );
      setResult(response.data.result); // Set the search result
    } catch (error) {
      console.error(error); // Handle the error
    }
  };

  const getUserFriendList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/friend/get/${userId}`
      );
      setFriendList(response.data.result);
      console.log("ini get friend di search", response.data.result)
    } catch (error) {
      console.error("Error fetching friend list", error);
    }
  };

  const handleAddFriend = async (friendId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/friend/add/${userId}/${friendId}`
      );
      successAlert(response.data.message);
      getUserFriendList(); // Refresh the friend list after adding a friend
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserFriendList();
  },[]);

  const isFriend = (friendId) => {
    return friendList.some(friend => friend.id === friendId);
  };

  return (
    <>
      <div className="my-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            findSearch(searchInput); // Pass the input value to findSearch
          }}
        >
          <input
            type="text"
            placeholder="Search uid"
            className="focus:border-yellow-40 w-full rounded-md border-2 px-2 py-2 text-xs sm:py-1 sm:text-base"
            value={searchInput} // Bind input value to state
            onChange={(e) => setSearchInput(e.target.value)} // Update state on change
          />
          {/* <button type="submit">Search</button> */}
        </form>
        {result &&  (
          <>
            <div
              key={result.id}
              className="flex items-center rounded-xl border-2 border-slate-600 px-6 py-2 my-2"
            >
              <img
                src={
                  result.profile_picture
                    ? `${process.env.REACT_APP_AVATAR_BASE_URL}/${result.profile_picture}`
                    : EmptyUser
                }
                className="h-14 w-14 overflow-hidden rounded-full"
              />

              <div className="ml-4 flex lg:w-10/12 items-end">
                <div>
                  <p className="p-0 font-helvetica text-sm text-primaryBlue">
                    {capitalizeFirstLetter(result.first_name)}{" "}
                    {capitalizeFirstLetter(result.last_name)}
                  </p>
                  <p className="p-0 font-helvetica text-xs text-primaryYellow">
                    uid :{result.uid}
                  </p>
                </div>
                <p className="ml-auto hidden items-center p-0 font-helvetica text-xs text-slate-300 md:flex">
                  <ChatBubbleOvalLeftEllipsisIcon className="mr-2 h-3 w-3" />
                  {result.status}
                </p>
              </div>
              {isFriend(result.id) ? (
                <div className="ml-auto mr-4 h-8 w-8 flex items-center">
                  <p className="text-slate-300 font-bold mr-2">Added</p>
                </div>
              ) : (
                <button
                  className="ml-auto h-8 w-8 text-primaryBlue transition duration-200 hover:text-blue-600"
                  onClick={() => handleAddFriend(result.id)}
                >
                  <PlusCircleIcon />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchFriends;

