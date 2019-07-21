import React, { Component } from "react";

import PropTypes from "prop-types";

import Project from "../../Presentation/Project/Project";

import IProject from "../../../Interfaces/IProject";

import "./Projects.scss";


interface IProjectsProps {
    projects: IProject[];
    className?: string;
}

class Projects extends Component<IProjectsProps> {
    public static propTypes = {
        className: PropTypes.string,
        projects: PropTypes.arrayOf(
            PropTypes.shape({
                actionHref: PropTypes.string,
                actionOnClick: PropTypes.func,
                actionText: PropTypes.string,
                id: PropTypes.number.isRequired,
                logoAlt: PropTypes.string,
                logoHref: PropTypes.string,
                subtext: PropTypes.string,
                title: PropTypes.string.isRequired,
                titleHref: PropTypes.string,
            }),
        ).isRequired,
    };

    public render() {
        const { className } = this.props;
        let { projects } = this.props;
        projects = Array.from(projects);
        return (
            <div className={`${className ? `${className} ` : ""}Projects m-0 mx-sm-5 d-flex flex-column`}>
                {projects.map((p, i, a) => (
                    <Project
                        {...p}
                        key={`project-${p.id}`}
                        showHorizontalRule={i !== a.length - 1}
                        className="mb-3 ms-slideRightIn40"
                    />
                ))}
            </div>
        );
    }
}

export default Projects;
