// this is how we create a heading element in react
// React.createElement is a function that creates a React element, here element is a React element that we want to render ex heading
// the first argument is the type of element we want to create, the second argument is the props (attributes) we want to pass to the element, and the third argument is the children of the element, what we want to pass inside the element
// We created h1 tag as a React element with the text "Hello, World!" inside it
const heading = React.createElement("h1", { id: "heading" }, "Hello, World!"); // so https://unpkg.com/react@18/umd/react.development.js this is used here
// this is how we render the react component into the root div
// ReactDOM.createRoot is a function that creates a root for the React application, it takes a DOM element as an argument, and then we can use the render method to render the React element into the root
//Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById("root")); // so https://unpkg.com/react-dom@18/umd/react-dom.development.js this is used here
// Render the React element into the root
root.render(heading); // this will render the heading element into the root div
//root is the place where all the react component will be rendered

//react element is just a js object

console.log(heading);
//out put will be an js object

// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof
// :
// Symbol(react.element)
// key
// :
// null
// props
// :
// children
// :
// "Hello, World!"
// id
// :
// "heading"
// [[Prototype]]
// :
// Object
// ref
// :
// null
// type
// :
// "h1"
// _owner
// :
// null
// _store
// :
// {validated: false}
// _self
// :
// null
// _source
// :
// null
// [[Prototype]]
// :
// Object

//"h1", { id: "heading" }, "Hello, World!"); here 3r argument is the children of the element, and the second argument is the props (attributes) we want to pass to the element, so here we are passing id as an attribute to the h1 element, and the first argument is the type of element we want to create, so here we are creating an h1 element

//React.createElement is an object it is not creating an html while redenring on to the DOM it converts it into an html element, so it is not creating an html element directly, it is creating a react element which is a js object, and then ReactDOM root.render is used to render the react element into the root div, so it is not creating an html element directly
