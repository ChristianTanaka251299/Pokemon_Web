import React from "react";
import { useSearchParams } from "react-router-dom"

const SearchForm = () => {
  const [searchParams] = useSearchParams()
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Pokémon"
          className="focus:border-yellow-40 rounded-md border-2 px-2 py-2 text-xs sm:py-1 sm:text-base"
          onChange={(e) => searchParams.set({search:e.target.value})}
        />
      </form>
    </>
  );
};

export default SearchForm;
