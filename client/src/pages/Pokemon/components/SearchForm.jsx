import React from "react";

const SearchForm = () => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Pokémon"
          className="focus:border-yellow-40 rounded-md border-2 px-2 py-2 text-xs sm:py-1 sm:text-base"
        />
      </form>
    </>
  );
};

export default SearchForm;
