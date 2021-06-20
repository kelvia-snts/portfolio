import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../screens/Home/Home";
import Email from "../screens/Email/Email";
import Projects from "../screens/Projects/Projects";
import ErrorPage from "../screens/Error/ErrorPage";
import {Header} from "../components/header/Header"

const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projetos">
          <Projects />
        </Route>
        <Route exact path="/contato">
          <Email />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;