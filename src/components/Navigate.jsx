import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}
export default Nav;
