const { useRouteError } = require("react-router");
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>{error.status}</p>
    </div>
  );
};

export default Error;
