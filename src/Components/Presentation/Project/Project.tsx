import React, { Fragment } from "react";

import PropTypes from "prop-types";

import {
    Image,
    ImageFit,
    Link,
    PrimaryButton,
 } from "office-ui-fabric-react";

import IProject from "../../../Interfaces/IProject";

import "./Project.scss";

interface IProjectProps extends IProject {
    className?: string;
    showHorizontalRule: boolean;
}

const Project = (props: IProjectProps) => {
    const {
        actionHref,
        actionOnClick,
        actionText,
        className,
        logoAlt,
        logoHref,
        showHorizontalRule,
        subtext,
        title,
        titleHref,
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
                        <div className="mt-3 mx-auto">
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
    actionHref: PropTypes.string,
    actionOnClick: PropTypes.func,
    actionText: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.number.isRequired,
    logoAlt: PropTypes.string,
    logoHref: PropTypes.string,
    showHorizontalRule: PropTypes.bool,
    subtext: PropTypes.string,
    title: PropTypes.string.isRequired,
    titleHref: PropTypes.string,
};

export default Project;
