import React from "react"; // this is used to import react library
import ReactDOM from "react-dom/client"; // this is used to import react-dom library
import Header from "./components/Header";
import Body from "./components/Body";

//component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
