import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { param } from "../../../reducers/paramSlice";

const SearchForm = ({ setSearchParams, setUrl }) => {
  const params = useSelector((state) => state.param);
  const search = useSelector((state) => state.param.search);
  const item = useSelector((state) => state.param.item);
  const dispatch = useDispatch();

  const setParamReducer = (e) => {
    dispatch(param({ name: "search", value: e.target.value }));
  };

  const findSearch = async () => {
    await setSearchParams(params);
    if (params.search !== "") {
      setUrl(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
    } else {
      setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${item || 8}&offset=0`);
    }
  };

  return (
    <>
      <div className="md:ml-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            findSearch();
          }}
        >
          <input
            type="text"
            placeholder="Search Pokémon"
            className="focus:border-yellow-40 rounded-md border-2 px-2 py-2 text-xs sm:py-1 sm:text-base"
            onChange={(e) => setParamReducer(e)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchForm;
