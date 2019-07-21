import md5 from "md5";
import React, { Component } from "react";

import IProject from "./Interfaces/IProject";

import Projects from "./Components/Container/Projects/Projects";
import Footer from "./Components/Presentation/Footer/Footer";
import Header from "./Components/Presentation/Header/Header";
import Jumbotron from "./Components/Presentation/Jumbotron/Jumbotron";

import projects from "./projects.json";

interface IAppState {
    header: string;
    headerSubtext: string;
    footerText: string;
    emails: string[];
    gravatarHref: string;
}

class App extends Component<any, IAppState> {
    constructor(props: any) {
        super(props);

        const emails: string[] = (process.env.REACT_APP_GRAVATAR_EMAILS || "").split(";").map((v) => atob(v));

        const index: number = Math.round(Math.random() * (emails.length - 1));
        this.state = {
            emails,
            footerText: "Built in 2018 by Martin Tracey",
            gravatarHref: `//gravatar.com/avatar/${md5(emails[index])}?s=600`,
            header: "Welcome!",
            headerSubtext: "This site showcases my work. Please take the time to look around and feel free to reach out if you're interested in working with me!",
        };
    }

    public render() {
        const {
            gravatarHref,
            header,
            headerSubtext,
            footerText,
        } = this.state;

        return (
            <div className="App d-flex flex-column">
                <Header className="flex-shrink-0" siteTitle={window.location.hostname} />
                <div className="flex-fill d-flex flex-column content oy-auto">
                    <Jumbotron
                        header={header}
                        subtext={headerSubtext}
                        imageHref={gravatarHref}
                        imageAlt="Gravatar"
                    />
                    <div className="container">
                        <Projects projects={projects as IProject[]} />
                    </div>
                </div>
                <Footer
                    className="flex-shrink-0"
                    githubUsername={process.env.REACT_APP_GITHUB_USERNAME}
                    rightText={footerText}
                />
            </div>
        );
    }
}

export default App;
