import React from "react";

const OptionNavBar = (props) => {
        const {titleOption} = props
    return (
        <span className="nav-link text-light" aria-current="page"> {titleOption} </span>
    )
}

export default OptionNavBar;