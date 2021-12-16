/**
 *  [] Your home page should be accessible via the / route and include the following text:
 * Welcome to GhibliApp
 *
 */

import { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to GhibliApp</h1>
      </div>
    );
  }
}

export default Home;
