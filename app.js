import React from "react"; // this is used to import react library
import ReactDOM from "react-dom/client"; // this is used to import react-dom library

//jsx syntax is used to create elements in react
//React element
// const jsxHeading = <h1 id="heading">My name is ok</h1>; // this is a JSX element, it creates an h1 element with the text "My name is Manoj"

//React functional component is a function that returns a JSX element
// const Heading = () => {
//   return <h1 id="heading">My name is Manoj</h1>; // this is a functional component that returns an h1 element with the text "My name is Manoj"
// };
// const Heading2 = () => <h1 id="heading">My name is Manoj</h1>; // this is another way to write a functional component, it is called an arrow function component
// const root = ReactDOM.createRoot(document.getElementById("root")); // so https://unpkg.com/react-dom@18/umd/react-dom.development.js this is used here

// // root.render(jsxHeading); // this will render the heading element into the root div

// root.render(<Heading />); // this is used to render the Heading component into the root div

//Nested component

const Test = () => {
  return <h1 id="testing">Nested Testing</h1>; // this is a functional component that returns an h1 element with the text "My name is Manoj"
};

const Heading = () => (
  <div>
    <Test /> {/* this will render the Test component inside the div */}
    <h1 id="heading">My name is Manoj</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
