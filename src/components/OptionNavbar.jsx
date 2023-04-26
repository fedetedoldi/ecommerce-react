import React from "react";

const OptionNavBar = (props) => {
  const { titleOption } = props;

  return <span className="nav-link">{titleOption}</span>;
};

export default OptionNavBar;
