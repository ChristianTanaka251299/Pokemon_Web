import React from "react";
import { FormEdit } from "./components";
import Background from "../../assets/background.jpg"
const EditProfilePage = () => {
    const sectionStyle = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
      };
  return (
    <>
      <section style={sectionStyle}> 
        <section className="container-screen rounded-md my-20 py-7 bg-white text-center drop-shadow-lg">
          <h1 className="my-9 text-center font-helvetica text-lg lg:text-2xl text-primaryBlue">
            Edit Profile
          </h1>
          <FormEdit />

        </section>
      </section>
    </>
  );
};

export default EditProfilePage;