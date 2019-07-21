import React, { Component } from "react";

import PropTypes from "prop-types";

import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent";
import { ColorClassNames } from "office-ui-fabric-react";

import "./Footer.scss";


interface IFooterProps {
    githubUsername?: string;
    rightText: string;
    className?: string;
}

interface IFooterState {
    isHovering: boolean;
}

class Footer extends Component<IFooterProps, IFooterState> {
    public static propTypes = {
        className: PropTypes.string,
        githubUsername: PropTypes.string,
        rightText: PropTypes.string.isRequired,
    };

    public state = {
        isHovering: false,
    };

    public render() {
        const { githubUsername, rightText, className } = this.props;
        const { isHovering } = this.state;
        const classNames: string[] = [];

        if (className != null) { classNames.splice(0, 0, className); }
        classNames.push("d-flex", githubUsername != null ? "justify-content-between" : "justify-content-end", "align-items-center", ColorClassNames.themeDarkerBackground);

        return (
            <footer className={classNames.join(" ")}>
                { githubUsername && (
                    <a
                        href={`//github.com/${githubUsername}`}
                        className={`github-footer-link ml-3 ms-fontWeight-light d-flex align-items-center ${isHovering ? ColorClassNames.neutralLight : ColorClassNames.white}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", textDecorationLine: "none" }}
                        onMouseEnter={() => this.setState({ isHovering: true })}
                        onMouseLeave={() => this.setState({ isHovering: false })}
                    >
                        <i className="fab fa-github ms-fontSize-xl"></i>
                        <span className="ml-2">{githubUsername}</span>
                    </a>
                ) }
                <div className="mr-3 ms-fontWeight-light" style={{ color: NeutralColors.white }}>{rightText}</div>
            </footer>
        );
    }
}

export default Footer;
