//import { Link } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logo goes here</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
