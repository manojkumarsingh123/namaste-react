import React from "react"; // this is used to import react library
import ReactDOM from "react-dom/client"; // this is used to import react-dom library
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"; // this is used to import the Contact component
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; // this is used to import react-router-dom library

//component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // this is the path for the app
    element: <AppLayout />, // this is the element that will be rendered
    children: [
      {
        path: "/", // this is the path for the home page
        element: <Body />, // this is the element that will be rendered for the home page
      },
      {
        path: "/about", // this is the path for the about page
        element: <About />, // this is the element that will be rendered for the about page
      },

      {
        path: "/contact", // this is the path for the contact page
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", // this is the path for the restaurant menu page
        element: <RestaurantMenu />, // this is the element that will be rendered for the restaurant
      },
    ],
    errorElement: <Error />, // this is the element that will be rendered in case of an error
  },
]); // this is used to create a browser router

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
