import { Link } from "@reach/router";

const NoService = () => {
  return (
    <div className="container No-Service-area">
      <h1>404</h1>
      <Link to="/">
        <p>Go to home</p>
      </Link>
    </div>
  );
};

export default NoService;
