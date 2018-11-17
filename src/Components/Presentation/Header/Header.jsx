import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = props => {
    const { siteTitle, className } = props;
    return (
        <header className={`${className ? `${className} ` : ""}d-flex align-items-center ms-bgColor-themeDarker`}>
            <a href="/" className="d-flex align-items-center ml-3">
                <div className="logo" />
                <div className="ms-font-xl ml-1 ms-fontColor-white">{siteTitle}</div>
            </a>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Header;
