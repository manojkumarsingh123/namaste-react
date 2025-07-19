import React from "react"; // this is used to import react library
import ReactDOM from "react-dom/client"; // this is used to import react-dom library
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, World manoj!"
);
const root = ReactDOM.createRoot(document.getElementById("root")); // so https://unpkg.com/react-dom@18/umd/react-dom.development.js this is used here

root.render(heading); // this will render the heading element into the root div
