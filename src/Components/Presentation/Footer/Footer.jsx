import React from "react";
import PropTypes from "prop-types";

import { Link } from "office-ui-fabric-react"

import "./Footer.css";

const Footer = props => {
    const { githubUsername, rightText, className } = props;
    return (
        <footer
            className={`${
                className ? `${className} ` : ""
            }d-flex ${
                githubUsername ? "justify-content-between" : "justify-content-end"
            } align-items-center ms-bgColor-themeDarker`}
        >
            { githubUsername && (
                <Link
                    href={`//github.com/${githubUsername}`}
                    className="ml-3 ms-fontColor-white ms-fontColor-neutralQuaternary--hover ms-fontWeight-light d-flex"
                    target="_blank"
                >
                    <i className="fab fa-github ms-fontSize-xl"></i>
                    <span className="ml-1">{githubUsername}</span>
                </Link>
            ) }
            <div className="mr-3 ms-fontColor-white ms-fontWeight-light">{rightText}</div>
        </footer>
    );
};

Footer.propTypes = {
    githubUsername: PropTypes.string,
    rightText: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default Footer;
