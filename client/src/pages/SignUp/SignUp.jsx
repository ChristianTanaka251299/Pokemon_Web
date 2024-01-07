import React from "react";
import {Link} from "react-router-dom"
import { Form } from "./component";
import Background from "../../assets/background.jpg"
const SignUp = () => {
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
            Sign up
          </h1>
          <Form />
          <div className="flex items-center justify-center lg:mt-12 text-slate-400  mt-24">
            <p>Already have an account ? </p>
            <Link to="/login">
              <p className="ml-2 text-primaryBlue font-helvetica hover:text-primaryYellow transition duration-150 "> Sign in</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default SignUp;