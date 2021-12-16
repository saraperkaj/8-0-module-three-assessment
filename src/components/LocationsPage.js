/**
 * 
[ ] All content should be inside of some element with the class .locations.

[ ] Has the text "List of Locations" on the page.

[ ] When arriving on the page, has a button with the text "Show Locations".

[ ] When the "Show Locations" button is clicked, the text should be changed to "Hide Locations".

[ ] When the "Show Locations" button is clicked, all of the locations received from the API should be displayed. Each location should include it's name, climate, and terrain.

Use list items to display each of these locations.

[ ] When the "Hide Locations" button is clicked, all of the locations should be hidden.
 */

import { Component } from "react";
import "./LocationsPage.css";

class LocationsPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="locations">
        <h1>Welcome to GhibliApp</h1>
      </div>
    );
  }
}

export default LocationsPage;
