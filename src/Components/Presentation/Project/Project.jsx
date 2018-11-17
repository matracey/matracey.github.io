import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { PrimaryButton, Image, ImageFit, Link } from "office-ui-fabric-react";

import "./Project.css";


const Project = props => {
    const {
        title,
        titleHref,
        subtext,
        actionText,
        actionHref,
        actionOnClick,
        logoHref,
        logoAlt,
        showHorizontalRule,
        className
    } = props;

    return (
        <Fragment>
            <div className={`${className ? `${className} ` : ""}d-flex project-container`}>
                <div className="flex-fill project-text d-flex flex-column">
                    { titleHref ? (
                        <Link className="mt-3 ms-font-xxl title" href={titleHref} target="_blank">{title}</Link>
                    ) : (
                        <div className="mt-3 ms-font-xxl title">{title}</div>
                    )}
                    {subtext && <div className="mt-1 mb-auto ms-font-l subtext">{subtext}</div>}
                    {actionText && (
                        <div className="mt-3 mh-auto">
                            <PrimaryButton text={actionText} href={actionHref} target="_blank" onClick={actionOnClick} />
                        </div>
                    )}
                </div>
                <div className="project-logo flex-shrink-0">
                    <Image src={logoHref || process.env.REACT_APP_LOGO_HREF} alt={logoAlt || title} maximizeFrame imageFit={ImageFit.contain}  />
                </div>
            </div>
            {showHorizontalRule && <hr className="w-100" />}
        </Fragment>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    titleHref: PropTypes.string,
    subtext: PropTypes.string,
    actionText: PropTypes.string,
    actionHref: PropTypes.string,
    actionOnClick: PropTypes.func,
    logoHref: PropTypes.string,
    logoAlt: PropTypes.string,
    showHorizontalRule: PropTypes.bool,
    className: PropTypes.string
};

export default Project;
