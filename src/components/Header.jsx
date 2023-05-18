import React from "react";
import Image from "./Image";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-white">
      <Image src="" className="col-start-1 col-span-2" />
      <SearchBar className="col-start-4 col-span-6" />
    </div>
  );
};

export default Header;
