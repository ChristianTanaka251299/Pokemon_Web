import React from "react";

const LoginForm = () => {
  return (
    <section className="container-screen rounded-md bg-white">
      <h1 className="my-8 py-10 text-center font-helvetica text-2xl text-primaryBlue">
        Sign in to <span className="text-primaryYellow">Pokémon</span>
      </h1>

      <form className="text-center">
        <input
          type="text"
          id="username"
          className=" w-1/2 rounded-lg border border-gray-400 bg-gray-50 p-4 text-sm placeholder-gray-400 focus:ring-yellow-400 focus:border-yellow-400 "
          placeholder="Username"
        />
      </form>
    </section>
  );
};

export default LoginForm;
