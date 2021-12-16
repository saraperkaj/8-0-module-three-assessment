/**
 * [ ] All content should be inside of some element with the class .people.

[ ] Has the text "Search for a Person" on the page.

[ ] Has a form that includes a text input and a submit button. Use a button element for the submit button, not an input element.

[ ] After typing a name into the text field and pressing submit, the relevant character's name, age, and gender should be shown on the page. Submitting the form should also clear the text field.

[ ] If the search does not yield any results, the text "Not Found" should be displayed.


 */

import { Component } from "react";
import "./PeoplePage.css";

class PeoplePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="people">
        <h1>Welcome to GhibliApp</h1>
      </div>
    );
  }
}

export default PeoplePage;
