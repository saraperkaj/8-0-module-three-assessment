/**
 * Navigation bar
[ ] The navigation bar should be created using the nav element.

[ ] The navigation bar should include a logo of your choosing which is 50px wide and 50px high. It should be displayed in the upper-left corner of the page.

[ ] Clicking on the logo should return the user to the home page.

[ ] The navigation bar should includes links for "Movies", "People", and "Locations". Each link should go to the related route.
 */

import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <header>
        <article>
          <h1>
            <Link to="/">
              <img
                src="https://i.pinimg.com/originals/f3/35/ee/f335ee72aa6d64bebafc8a41515e07e8.jpg"
                alt=""
              />
            </Link>
          </h1>
        </article>
      </header>
      <aside>
        <ul>
          <li className="li">
            <a href="/movies">Movies</a>
          </li>
          <li className="li">
            <Link to="/people">People</Link>
          </li>
          <li className="li">
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default NavBar;
