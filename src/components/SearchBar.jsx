import React from "react";
import searchIcon from "../images/search-icon.svg";
import Image from "./Image";

const SearchBar = ({ height }) => {
  return (
    <div
      className={[
        "bg-slate-300 border-none ",
        height === "comfortable" ? "h-40px" : "h-32px",
      ].join(" ")}
    >
      <Image src={searchIcon} alt="SearchIcon" />
      <input type="text" />
    </div>
  );
};

export default SearchBar;
