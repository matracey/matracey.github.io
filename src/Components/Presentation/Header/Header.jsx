import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = props => {
    const { siteTitle } = props;
    return (
        <header className="d-flex align-items-center ms-bgColor-themeDarker">
            <a href="/" className="d-flex align-items-center ml-3">
                <div className="logo" />
                <div className="ms-fontColor-white ms-font-xl ml-1">{siteTitle}</div>
            </a>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired
}

export default Header;
