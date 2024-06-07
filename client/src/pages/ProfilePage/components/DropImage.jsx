import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import { handleSubmitProfileImage } from "../../../function/users"
import { closeModal } from "../../../reducers/modalSlice"
import dropImage from "../../../assets/drop_image.png";

const DropImage = ({getUserInfo}) => {
  const inputFileRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(dropImage);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const userId = useSelector((state) => state.user.id);
  const maxFileSize = 1048576; 
  const dispatch = useDispatch()

  const uploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > maxFileSize) {
        setErrorMessage("Your file exceeds 1MB");
      } else {
        const imgLink = URL.createObjectURL(file);
        setImagePreview(imgLink);
        setErrorMessage(""); // Clear the error message if the file is valid
      }
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
      if (file.size > maxFileSize) {
        setErrorMessage("Your file exceeds 1MB");
      } else {
        const imgLink = URL.createObjectURL(file);
        setImagePreview(imgLink);
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="flex flex-col items-center text-center">
      <div id="header">
        <h1 className="text-md font-bold">Please select your profile picture.</h1>
        <p className="mt-2 text-xs text-slate-600">
          File size: maximum 1,000,000 bytes (1 Megabytes). Allowed file
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
            {errorMessage && <p className="text-red-500 py-2">{errorMessage}</p>}
          </div>
        </label>
      </div>
      <button className="bg-primaryBlue p-4 rounded-md w-1/2 hover:bg-blue-700 transition duration-200" type="submit" onClick={() => handleSubmitProfileImage(userId, getUserInfo, dispatch(closeModal()), dispatch)}>
        <p className="font-helvetica text-white">Save</p>
      </button>
    </section>
  );
};

export default DropImage;
