import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="flex w-10/12 lg:w-[600px] flex-col">
        <button
          className="place-self-end text-xl text-white"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="rounded bg-white p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
