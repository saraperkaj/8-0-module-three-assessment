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
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          movies: json,
        });
      });
  }

  render() {
    const { movies } = this.state;
    return null;
    <div className="movies">
      <h1>Select a Movie</h1>
      <label for="movies">Choose A Movie:</label>
      {movies.map((movie) => (
        <ul key={movie.id}></ul>
      ))}
    </div>;
  }
}

export default MoviesPage;
