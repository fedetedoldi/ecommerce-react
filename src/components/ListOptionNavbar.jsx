import React from "react";
import OptionNavBar from "./OptionNavbar";

const ListOptionNavBar = (props) => {
  const { nameOption } = props;

  return (
    <div className="navbar-nav">
      {nameOption.map((nameItem, index) => {
        return <OptionNavBar key={index} titleOption={nameItem} />;
      })}
    </div>
  );
};

export default ListOptionNavBar;
