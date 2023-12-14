import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../Slicer/globalSlice";

const SearchComponent = () => {
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchComponent;
