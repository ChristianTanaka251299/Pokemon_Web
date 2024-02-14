import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { param } from "../../../reducers/paramSlice";

const ShowingFilter = ({ setSearchParams, setUrl }) => {
  const params = useSelector((state) => state.param);
  const item = useSelector((state) => state.param.item);
  const dispatch = useDispatch();
  
  const fetchNewPokemon = (e) => {
    dispatch(param({ name: "item", value: e.target.value }));
  };

  const searchParamsSet = async () => {
    await setSearchParams(params);
    if (params.item !== undefined) {
      setUrl(`https://pokeapi.co/api/v2/pokemon?limit=${item}&offset=0`);
    }
  };
  
  useEffect(() => {
    searchParamsSet();
  }, [item]);

  return (
    <>
      <div className="my-3 ml-auto flex items-center sm:ml-0">
        <h1 className="hidden font-actor sm:block">Showing</h1>
        <select
          className="w-13 mx-2 rounded-md border-2 border-primaryBlue px-2 py-1 focus:border-yellow-500"
          onChange={(e) => fetchNewPokemon(e)}
        >
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
