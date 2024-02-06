"use client";
import React, { useState } from "react";
import { SearchManfacture } from ".";

const SearchBar = () => {
  const [manfacture, setManufacture] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManfacture
          manufacturer={manfacture}
          setManuFacturer={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
