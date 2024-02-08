import React from "react";

const ShowingFilter = () => {
  return (
    <>
      <div className="my-3 ml-auto flex items-center sm:ml-0">
        <h1 className="hidden font-actor sm:block">Showing</h1>
        <select className="w-13 mx-2 rounded-md border-2 border-primaryBlue px-2 py-1 focus:border-yellow-500">
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="24">24</option>
          <option value="32">32</option>
        </select>
        <h1 className="hidden font-actor sm:block">Pokémon’s</h1>
      </div>
    </>
  );
};

export default ShowingFilter;
