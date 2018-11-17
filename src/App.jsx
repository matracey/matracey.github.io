import React, { Component } from "react";

import Header from "./Components/Presentation/Header/Header";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
            </div>
        );
    }
}

export default App;
