import React from "react";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import homePaths from "./Paths/homePaths";
import aboutPaths from "./Paths/aboutPaths";
import blogPaths from "./Paths/blogPaths";
import HomeApp from "./Apps/HomeApp";
import AboutApp from "./Apps/AboutApp";
import BlogApp from "./Apps/BlogApp";
import NotFound404 from "./404/404";
const Router: React.FunctionComponent = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={() => <Redirect to="/home" />} />
                {homePaths.map((path: any) => {
                    return <Route exact path={path} component={HomeApp} key={`${path}-${Math.random()}`} />;
                })}
                {aboutPaths.map((path: any) => {
                    return <Route exact path={path} component={AboutApp} key={`${path}-${Math.random()}`} />;
                })}
                {blogPaths.map((path: any) => {
                    return <Route exact path={path} component={BlogApp} key={`${path}-${Math.random()}`} />;
                })}
                <Route component={NotFound404} />
            </Switch>
        </HashRouter>
    );
};
export default Router;
