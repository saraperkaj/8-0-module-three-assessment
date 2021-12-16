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
    <header>
      <aside>
        <ul>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};

export default NavBar;
