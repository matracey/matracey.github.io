import React, { Component } from "react";
import md5 from "md5";

import Header from "./Components/Presentation/Header/Header";
import Jumbotron from "./Components/Presentation/Jumbotron/Jumbotron";
import Footer from "./Components/Presentation/Footer/Footer";
import Projects from "./Components/Container/Projects/Projects";

import projects from "./projects.json";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        const emails = (process.env.REACT_APP_GRAVATAR_EMAILS).split(";").map(v => atob(v));
        const index = Math.round(Math.random() * (emails.length -1));
        this.state = { gravatarHref: `//gravatar.com/avatar/${md5(emails[index])}?s=600` }
    }

    render() {
        const { gravatarHref } = this.state;

        return (
            <div className="App d-flex flex-column">
                <Header className="flex-shrink-0" siteTitle={window.location.hostname} />
                <div className="flex-fill d-flex flex-column content oy-auto">
                    <Jumbotron header="Welcome!" subtext="This site showcases my work. Please take the time to look around and feel free to reach out if you're interested in working with me!" imageHref={gravatarHref} imageAlt="Gravatar" />
                    <div className="container">
                        <Projects projects={projects} />
                    </div>
                </div>
                <Footer className="flex-shrink-0" githubUsername={process.env.REACT_APP_GITHUB_USERNAME} rightText="Built in 2018 by Martin Tracey" />
            </div>
        );
    }
}

export default App;
