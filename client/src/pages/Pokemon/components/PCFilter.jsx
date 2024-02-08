import React from "react";
import ShowingFilter from "./ShowingFilter";
import SearchForm from "./SearchForm";
import { FunnelIcon } from "@heroicons/react/24/solid";

const PCFilter = () => {
  return (
    <section className="container-screen hidden items-center md:flex">
      <ShowingFilter />
      <FunnelIcon className="ml-auto mr-4 w-7 text-primaryBlue" />
      <SearchForm />
    </section>
  );
};

export default PCFilter;
