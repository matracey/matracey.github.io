import React, { Component } from "react";

import Header from "./Components/Presentation/Header/Header";
import Jumbotron from "./Components/Presentation/Jumbotron/Jumbotron";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header siteTitle={process.env.REACT_APP_NAME} />
                <Jumbotron header="Welcome!" subtext="This site showcases my work. Please take the time to look around and feel free to reach out to me too!" />
            </div>
        );
    }
}

export default App;
