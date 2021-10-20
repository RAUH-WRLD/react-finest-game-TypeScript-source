import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Pages/Blog/Main";
import Footer from "../Footer/Footer";
import App from "./App";
class BlogApp extends React.Component {
    render() {
        return <App Header={Header} Main={Main} Footer={Footer} />;
    }
}
export default BlogApp;
