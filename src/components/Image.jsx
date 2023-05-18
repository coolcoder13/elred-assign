import React from "react";
import defaultImg from "../images/default.svg";

const Image = (props) => {
  return (
    <img
      {...props}
      onError={(e) => {
        e.target.src = defaultImg;
        e.onerror = null;
      }}
      className="max-h-8 max-w-fit"
    />
  );
};

export default Image;
