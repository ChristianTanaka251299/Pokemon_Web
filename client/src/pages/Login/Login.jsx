import React from "react";
import {Link} from "react-router-dom"
import { Form } from "./component";
const Login = () => {
  return (
    <>
      <section className=" bg-primaryBlue">
        <section className="container-screen rounded-md my-20 py-7 bg-white text-center">
          <h1 className="my-9 text-center font-helvetica text-lg lg:text-2xl text-primaryBlue">
            Sign in to <span className="text-primaryYellow">Pokémon</span>
          </h1>
          <Form />
          <div className="flex items-center justify-center lg:mt-12 text-slate-400  mt-24">
            <p>Don't have an account ? </p>
            <Link to="/">
              <p className="ml-2 text-primaryBlue font-helvetica hover:text-primaryYellow transition duration-150 "> Sign up</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
