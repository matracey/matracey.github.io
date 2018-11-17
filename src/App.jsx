import React, { Component } from "react";

import Header from "./Components/Presentation/Header/Header";
import Jumbotron from "./Components/Presentation/Jumbotron/Jumbotron";
import Footer from "./Components/Presentation/Footer/Footer";
import Projects from "./Components/Container/Projects/Projects";

import projects from "./projects.json";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header className="flex-shrink-0" siteTitle={window.location.hostname} />
                <div className="flex-fill d-flex flex-column content oy-auto">
                    <Jumbotron header="Welcome!" subtext="This site showcases my work. Please take the time to look around and feel free to reach out to me!" />
                    <div className="container">
                        <Projects projects={projects} />
                    </div>
                </div>
                <Footer className="flex-shrink-0" text="Built in 2018 by Martin Tracey" />
            </div>
        );
    }
}

export default App;
