import React, { Component } from "react";
import PropTypes from "prop-types";

import Project from "../../Presentation/Project/Project";

class Projects extends Component {
    render() {
        let { projects } = this.props;
        projects = Array.from(projects);
        return (
            <div className="Projects mh-5 d-flex flex-column">
                {projects.map(p => (
                    <Project
                        title={p.title}
                        titleHref={p.titleHref}
                        subtext={p.subtext}
                        actionText={p.actionText}
                        actionHref={p.actionHref}
                        actionOnClick={p.actionOnClick}
                        logoHref={p.logoHref}
                        logoAlt={p.logoAlt}
                    />
                ))}
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            titleHref: PropTypes.string,
            subtext: PropTypes.string,
            actionText: PropTypes.string,
            actionHref: PropTypes.string,
            actionOnClick: PropTypes.func,
            logoHref: PropTypes.string,
            logoAlt: PropTypes.string
        })
    ).isRequired
};

export default Projects;