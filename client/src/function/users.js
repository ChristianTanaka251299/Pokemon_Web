import axios from "axios";
import {successAlert} from "../helper/alert"
import { editProfile } from "../reducers/userSlice"

const handleSubmitProfileImage = async (userId, reRenderFunction, closeModalFunction, dispatch) => {
    const profilePicture = new FormData();
    const fileInput = document.getElementById("input-file");
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      profilePicture.append("profile_picture", file);
      
      try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/profile/${userId}`, profilePicture);
        await successAlert(result.data.message);

        const getuserProfile = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/get/${userId}`)
        dispatch(editProfile(getuserProfile.data.result.profile_picture))
        reRenderFunction()
        closeModalFunction(false)
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please select a picture to be uploaded");
    }
  };

  const getUser = async (userUid) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/get/${userUid}`);
      return response.data.result; // Assuming the user data is in response.data
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }

  export { handleSubmitProfileImage, getUser }