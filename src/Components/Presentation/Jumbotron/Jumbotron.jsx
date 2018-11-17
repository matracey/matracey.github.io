import React from "react";
import PropTypes from "prop-types";

import "./Jumbotron.css";

const Jumbotron = props => {
    const { header, subtext } = props;
    return (
        <div className="ms-bgColor-neutralLighter jumbotron-container">
            <div className="ms-font-su jumbotron-header">{header}</div>
            <div className="ms-fontSize-xl ms-fontWeight-light jumbotron-subtext">
                {subtext}
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    header: PropTypes.string.isRequired,
    subtext: PropTypes.string
};

export default Jumbotron;
