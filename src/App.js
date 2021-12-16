import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import React from "react";
import NavBar from "./components/NavBar";
import MoviesPage from "./components/MoviesPage";
import PeoplePage from "./components/PeoplePage";
import LocationsPage from "./components/LocationsPage";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
          <Route path="/movies">
            <NavBar />
            <MoviesPage />
          </Route>
          <Route path="/people">
            <NavBar />
            <PeoplePage />
          </Route>
          <Route path="/locations">
            <NavBar />
            <LocationsPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
