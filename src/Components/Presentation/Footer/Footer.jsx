import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const Footer = props => {
    const { text, className } = props;
    return (
        <footer className={`${className ? `${className} ` : ""}d-flex justify-content-end align-items-center ms-bgColor-themeDarker`}>
            <div className="mr-3 ms-fontColor-white ms-fontWeight-light">{text}</div>
        </footer>
    );
};

Footer.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Footer;
