import React from "react";
import PropTypes from "prop-types";

import "./Header.css";

const Header = props => {
    const { siteTitle, className } = props;
    document.title = `Welcome to ${siteTitle}!`;
    return (
        <header className={`${className ? `${className} ` : ""}d-flex align-items-center ms-bgColor-themeDarker`}>
            <a href="/" className="d-flex align-items-center ml-3">
                <div className="logo" style={{ backgroundImage: `url("${process.env.REACT_APP_LOGO_HREF}")` }} />
                <div className="ms-font-xl ml-1 ms-fontColor-white ms-fontColor-neutralQuaternary--hover">{siteTitle}</div>
            </a>
        </header>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Header;
