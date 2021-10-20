import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Pages/About/Main";
import Footer from "../Footer/Footer";
import App from "./App";
class AboutApp extends React.Component {
    render() {
        return <App Header={Header} Main={Main} Footer={Footer} />;
    }
}
export default AboutApp;
