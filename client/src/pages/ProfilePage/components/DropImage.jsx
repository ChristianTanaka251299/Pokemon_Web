import React, { useRef, useState } from "react";
import dropImage from "../../../assets/drop_image.png";

const DropImage = () => {
  const inputFileRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(dropImage);
  const [dragActive, setDragActive] = useState(false);

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

  return (
    <section>
      <div id="header">
        <h1 className="text-xl">Please select your profile picture.</h1>
        <p className="mt-2 text-xs text-slate-600">
          File size: maximum 10,000,000 bytes (10 Megabytes). Allowed file
          extensions: .JPG .JPEG .PNG
        </p>
      </div>
      <div
        id="dropImage"
        className={`my-6 flex w-3/4 items-center justify-center rounded-2xl border-2 border-dashed border-slate-400 bg-blue-100/40 ${dragActive ? "border-blue-600 bg-blue-200" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <label htmlFor="input-file" id="drop-area">
          <input
            type="file"
            accept="image/*"
            id="input-file"
            ref={inputFileRef}
            onChange={uploadImage}
            hidden
          />
          <div className="flex flex-col items-center text-center" id="image-view">
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
    </section>
  );
};

export default DropImage;
