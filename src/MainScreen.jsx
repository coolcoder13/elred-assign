import React from "react";
import SideNav from "./components/SideNav";
import CartScreen from "./CartScreen";
import DetailsScreen from "./DetailsScreen";

const MainScreen = () => {
  return (
    <div className="grid grid-cols-12 gap-x-4 ">
      <SideNav className="col-start-1 col-span-2 bg-white rounded-3xl" />
      <DetailsScreen className="col-start-3 col-span-6 bg-white rounded-3xl" />
      <CartScreen className="col-start-9 col-span-4 bg-white rounded-3xl" />
    </div>
  );
};

export default MainScreen;
