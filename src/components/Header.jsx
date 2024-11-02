import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <>
      <div className="navbar">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Header;
