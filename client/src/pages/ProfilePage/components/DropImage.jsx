import React, { useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { successAlert } from "../../../helper/alert";
import dropImage from "../../../assets/drop_image.png";

const DropImage = () => {
  const inputFileRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(dropImage);
  const [dragActive, setDragActive] = useState(false);
  const userId = useSelector((state) => state.user.id);

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgLink = URL.createObjectURL(file);
      setImagePreview(imgLink);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      const imgLink = URL.createObjectURL(file);
      setImagePreview(imgLink);
    }
  };

  const triggerFileInput = () => {
    inputFileRef.current.click();
  };

  const handleSubmit = async () => {
    const profilePicture = new FormData();
    const fileInput = document.getElementById("input-file");
    if (fileInput.files.length > 0) {
      profilePicture.append("profile_picture", fileInput.files[0]);
      profilePicture.append("id", userId); // Tambahkan id pengguna

      try {
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/profile/${userId}`, profilePicture);

        await successAlert(result.data.message);
      } catch (error) {
        alert("Ada error bang: " + error.response.data.message);
        console.log("ini user id", userId)
      }
    } else {
      alert("Silakan pilih file untuk diunggah.");
    }
  };

  return (
    <section className="flex flex-col items-center text-center">
      <div id="header">
        <h1 className="text-md font-bold">Please select your profile picture.</h1>
        <p className="mt-2 text-xs text-slate-600">
          File size: maximum 10,000,000 bytes (10 Megabytes). Allowed file
          extensions: .JPG .JPEG .PNG
        </p>
      </div>
      <div
        id="dropImage"
        className={`mx-auto my-6 flex w-11/12 items-center justify-center rounded-2xl border-2 border-dashed border-slate-400 bg-blue-100/40 ${
          dragActive ? "border-blue-600 bg-blue-200" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <label htmlFor="input-file" id="drop-area">
          <input
            type="file"
            name="profile_picture"
            accept="image/*"
            id="input-file"
            ref={inputFileRef}
            onChange={uploadImage}
            hidden
          />
          <div
            className="flex flex-col items-center text-center"
            id="image-view"
          >
            <img className="w-1/2" src={imagePreview} alt="Uploaded Preview" />
            <p>
              Drag and drop or click here <br />
              to upload image
            </p>
            <span className="my-4 text-xs text-slate-400">
              Upload any images from desktop
            </span>
          </div>
        </label>
      </div>
      <button className="bg-primaryBlue p-4 rounded-md w-1/2 hover:bg-blue-700 transition duration-200" type="submit" onClick={handleSubmit}>
        <p className="font-helvetica text-white">Save</p>
      </button>
    </section>
  );
};

export default DropImage;
