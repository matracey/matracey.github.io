import React from "react";

import "./Header.css";

const Header = (props) => {
    const { siteTitle } = props;
    return (
        <header className="ms-bgColor-themeDarker d-flex align-items-center">
            <div className="logo ml-3" />
            <div className="ms-fontColor-white ms-font-xl ml-3">{siteTitle}</div>
        </header>
    );
}

export default Header;