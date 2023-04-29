import React from "react";
import OptionNavBar from "./OptionNavbar";

const ListOptionNavBar = (props) => {
  const { nameOption } = props;

  return (
    <div className="navbar-nav">
      {nameOption.map((item, index) => {
        return <OptionNavBar key={index} titleOption={item} />;
      })}
    </div>
  );
};

export default ListOptionNavBar;
