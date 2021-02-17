import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../views/HomePage";
import MoviesPage from "../views/MoviesPage";
import MoviesDetailsPage from "../views/MoviesDetailsPage";
import Cast from '../views/Cast'
import Layout from "./Layout";
import routes from "../routes";

const App = () => (
    <Layout>
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.MoviesDetailsPage} component={MoviesDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );


export default App;
