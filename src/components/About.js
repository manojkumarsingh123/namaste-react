import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the about page of our application.</p>
        {/* <User name={"manoj from function"} /> */}
        <UserClass name={"manoj from class"} location={"delhi"} />
      </div>
    );
  }
}

export default About;
