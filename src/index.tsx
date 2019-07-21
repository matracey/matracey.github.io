import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Fabric, loadTheme } from "office-ui-fabric-react";

import * as serviceWorker from "./serviceWorker";

import "normalize.css/normalize.css";

import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "office-ui-fabric-react/dist/sass/Fabric.scss";

const themes = {
    blue: {
        palette: {
            black: "#262626",
            neutralDark: "#343434",
            neutralLight: "#eaeaea",
            neutralLighter: "#f4f4f4",
            neutralLighterAlt: "#f8f8f8",
            neutralPrimary: "#444444",
            neutralPrimaryAlt: "#5b5b5b",
            neutralQuaternary: "#d0d0d0",
            neutralQuaternaryAlt: "#dadada",
            neutralSecondary: "#8f8f8f",
            neutralTertiary: "#c7c7c7",
            neutralTertiaryAlt: "#c8c8c8",
            themeDark: "#0046a6",
            themeDarkAlt: "#0053c5",
            themeDarker: "#00347a",
            themeLight: "#abcaf4",
            themeLighter: "#d1e2f9",
            themeLighterAlt: "#f3f8fe",
            themePrimary: "#005cdb",
            themeSecondary: "#1b6ddf",
            themeTertiary: "#5d98e9",
            white: "#ffffff",
        },
    },
    red: {
        palette: {
            black: "#262626",
            neutralDark: "#343434",
            neutralLight: "#eaeaea",
            neutralLighter: "#f4f4f4",
            neutralLighterAlt: "#f8f8f8",
            neutralPrimary: "#444444",
            neutralPrimaryAlt: "#5b5b5b",
            neutralQuaternary: "#d0d0d0",
            neutralQuaternaryAlt: "#dadada",
            neutralSecondary: "#8f8f8f",
            neutralTertiary: "#c7c7c7",
            neutralTertiaryAlt: "#c8c8c8",
            themeDark: "#a60003",
            themeDarkAlt: "#c50003",
            themeDarker: "#7a0002",
            themeLight: "#f4abac",
            themeLighter: "#f9d1d2",
            themeLighterAlt: "#fef3f4",
            themePrimary: "#db0004",
            themeSecondary: "#df1b1e",
            themeTertiary: "#e95d60",
            white: "#ffffff",
        },
    },
};

loadTheme(themes.blue);

ReactDOM.render(<Fabric><App /></Fabric>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
