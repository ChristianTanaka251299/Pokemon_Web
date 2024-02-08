import React from "react";
import SearchForm from "./SearchForm";
import ShowingFilter from "./ShowingFilter";
import { FunnelIcon } from "@heroicons/react/24/solid";

const MobileFilter = () => {
  return (
    <>
      <div className="container-screen flex items-center md:hidden">
        <SearchForm />
        <FunnelIcon className="ml-3 w-5 text-primaryBlue" />
        <ShowingFilter />
      </div>
    </>
  );
};

export default MobileFilter;
