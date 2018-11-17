import React from "react";
import PropTypes from "prop-types";

import "./Project.css";

const Project = props => {
    const { className } = props;
    return (
        <h1 className={className}>Project</h1>
    );
};

Project.propTypes = {
    className: PropTypes.string,
}

export default Project;
