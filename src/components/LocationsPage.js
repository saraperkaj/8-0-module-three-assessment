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

import React from "react";
import "./LocationsPage.css";

class LocationsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      show: true,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          locations: json,
        });
      });
  }

  // locationsList = () => {
  //   const { locations } = this.state;
  //   const allLocations = (

  //   );
  //   return allLocations;
  // };

  updateButton = () => {
    const { locations } = this.state;
    if ("Hide Locations") {
      <div>
        {locations.map((location) => (
          <ul key={location.id}>
            <li>
              name: {location.name}
              <br />
              climate: {location.climate}
              <br />
              terrain: {location.terrain}
            </li>
          </ul>
        ))}
      </div>;
      this.setState({ locations: [...locations, this.locationsList] });
    }
  };

  // showAndChange = (event) => {
  //   event.preventDefault();
  //   const { locations } = this.state;

  //   const allLocations = (
  //     <div>
  //       {locations.map((location) => (
  //         <ul key={location.id}>
  //           <li>
  //             name: {location.name}
  //             <br />
  //             climate: {location.climate}
  //             <br />
  //             terrain: {location.terrain}
  //           </li>
  //         </ul>
  //       ))}
  //     </div>
  //   );
  //   return this.setState({
  //     locations: [...locations, allLocations],
  //   });
  // };

  render() {
    const { locations } = this.state;
    return (
      <div className="locations">
        <h1>Select a location</h1>
        <button onClick={this.locationsList}>
          {!this.locationList ? "Show Locations" : "Hide Locations"}
        </button>
      </div>
    );
  }
}

export default LocationsPage;
