import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="absolute top-2/4">
      <h1 className="text-6xl">404 Not Found</h1>
      <p className="text-3xl">
        <Link className="text-green-600" to="/">
          Return Home
        </Link>
      </p>
    </div>
  );
}

export default Error;
