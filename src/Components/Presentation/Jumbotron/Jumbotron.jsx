import React from "react";
import PropTypes from "prop-types";

import { Image, ImageFit } from "office-ui-fabric-react";

import "./Jumbotron.css";

const Jumbotron = props => {
    const { header, subtext, imageHref, imageAlt } = props;
    return (
        <div className="ms-bgColor-neutralLight pv-3 ms-borderBox jumbotron">
            <div className="d-flex container">
                {imageHref && (
                    <Image
                        src={imageHref}
                        alt={imageAlt}
                        imageFit={ImageFit.contain}
                        maximizeFrame
                        width="12rem"
                        className="flex-shrink-0 flex-grow-0 rounded ms-hiddenMdDown"
                    />
                )}
                <div className="text-container flex-fill mv-auto ml-3">
                    <div className="ms-font-su jumbotron-header">{header}</div>
                    <div className="ms-fontSize-xl ms-fontWeight-light jumbotron-subtext">
                        {subtext}
                    </div>
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
