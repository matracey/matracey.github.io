import React from "react";
import PropTypes from "prop-types";

import { Image, ImageFit } from "office-ui-fabric-react";

import "./Jumbotron.css";

const Jumbotron = props => {
    const { header, subtext, imageHref, imageAlt } = props;
    return (
        <div className="ms-bgColor-neutralLighter jumbotron-container">
            {imageHref && (
                <div className="image-container">
                    <Image
                        href={imageHref}
                        alt={imageAlt}
                        imageFit={ImageFit.contain}
                    />
                </div>
            )}
            <div className="text-container">
                <div className="ms-font-su jumbotron-header">{header}</div>
                <div className="ms-fontSize-xl ms-fontWeight-light jumbotron-subtext">
                    {subtext}
                </div>
            </div>
        </div>
    );
};

Jumbotron.propTypes = {
    header: PropTypes.string.isRequired,
    subtext: PropTypes.string
};

export default Jumbotron;
