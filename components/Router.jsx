"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var _404_1 = require("./404/404");
var Router = function () {
    return (
        <react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Switch>
                <react_router_dom_1.Route
                    exact
                    path="/"
                    component={function () {
                        return <react_router_dom_1.Redirect to="/home" />;
                    }}
                />
                <react_router_dom_1.Route exact path="/home" component={App_1["default"]} />
                <react_router_dom_1.Route component={_404_1["default"]} />
            </react_router_dom_1.Switch>
        </react_router_dom_1.BrowserRouter>
    );
};
exports["default"] = Router;
