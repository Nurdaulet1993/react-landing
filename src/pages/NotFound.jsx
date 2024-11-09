import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>404 Not Found</div>
      <Link to="/">Go back to Homepage</Link>
      <a href="/">Go back to Homepage</a>
    </>

  )
}

export default NotFound;
