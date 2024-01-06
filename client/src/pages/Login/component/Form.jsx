import React from "react";

const Form = () => {
  return (
    <div className="text-center">
      <form className="lg:flex  lg:items-center lg:flex-col">
        <input
          type="text"
          id="email"
          className=" font-montserrat w-3/4 lg:w-1/2 rounded-md border border-gray-400 bg-gray-50 px-4 py-3 text-sm text-slate-600 placeholder-gray-400"
          placeholder="Email"
        />
        <input
          type="text"
          id="password"
          className=" font-montserrat my-8 w-3/4 lg:w-1/2 rounded-md border border-gray-400 bg-gray-50 px-4 py-3 text-sm text-slate-600 placeholder-gray-400"
          placeholder="Password"
        />
      </form>
      <button className="blue-button lg:mt-4"> Sign in </button>
    </div>
  );
};

export default Form;
