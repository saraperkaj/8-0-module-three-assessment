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
    this.state = {
      people: [],
      input: "",
      name: "",
      age: "",
      gender: "",
    };
  }

  // fillPeopleArr = () => {
  //   const result = this.state.people.find((person) => {
  //     person.name === this.state.name;
  //   });
  //   if (this.state.input.includes({ result })) {
  //     this.state.people.map((person) => {
  //       this.setState({
  //         name: person.name,
  //         age: person.age,
  //         gender: person.gender,
  //       });
  //     });
  //   }
  // };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          people: json,
        });
      });
  }

  render() {
    const { people } = this.state;
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <form>
          <input placeholder="search..." type="text" />
          <button>Submit</button>
          <li>
            {this.state.name}
            {this.state.age}
            {this.state.gender}
          </li>

          {people.map((person) => (
            <ul key={person.id}>
              <li>
                name: {person.name}
                <br />
                age: {person.age}
                <br />
                gender: {person.gender}
              </li>
            </ul>
          ))}
        </form>
      </div>
    );
  }
}

export default PeoplePage;
