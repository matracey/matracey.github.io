import React, { Component } from "react";

import PropTypes from "prop-types";

import { ColorClassNames } from "office-ui-fabric-react";

import "./Header.scss";


interface IHeaderProps {
    siteTitle: string;
    className: string;
}

interface IHeaderState {
    isHovering: boolean;
}

class Header extends Component<IHeaderProps, IHeaderState> {
    public static propTypes = {
        className: PropTypes.string,
        siteTitle: PropTypes.string.isRequired,
    };

    public state = {
        isHovering: false,
    };

    public render() {
        const { siteTitle, className } = this.props;
        const { isHovering } = this.state;
        const classNames: string[] = [];

        if (className != null) { classNames.splice(0, 0, className); }
        classNames.push("d-flex", "align-items-center", ColorClassNames.themeDarkerBackground);

        document.title = `Welcome to ${siteTitle}!`;
        return (
            <header className={classNames.join(" ")}>
                <a
                    href="/"
                    className={`d-flex align-items-center ml-3 ${isHovering ? ColorClassNames.neutralLight : ColorClassNames.white}`}
                    style={{ textDecoration: "none", textDecorationLine: "none" }}
                    onMouseEnter={() => this.setState({ isHovering: true })}
                    onMouseLeave={() => this.setState({ isHovering: false })}
                >
                    <div className="logo" style={{ backgroundImage: `url("${process.env.REACT_APP_LOGO_HREF}")` }} />
                    <div className="ml-1 ms-font-xl">{siteTitle}</div>
                </a>
            </header>
        );
    }
}

export default Header;
