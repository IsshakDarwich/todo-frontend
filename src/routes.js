import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./components/Header";
import App from "./components/App";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/list" component={App} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
