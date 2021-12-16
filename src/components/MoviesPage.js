/**Movies page (/movies)
[ ] All content should be inside some element with the class .movies.

[ ] Has the text "Select a Movie" on the page.

[ ] Has a select dropdown that includes an "empty" option element followed by all of the films produced by Studio Ghibli.

[ ] When a new option is selected from the dropdown, the movie's title, release date, and description should appear underneath the dropdown. At least the title of the movie should be in some kind of heading.

[ ] When the "empty" option is selected yet again, the film's information should disappear.
*/

import { Component } from "react";
import "./MoviesPage.css";

class MoviesPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="movies">
        <h1>Welcome to GhibliApp</h1>
      </div>
    );
  }
}

export default MoviesPage;
