import * as React from "react";
import { Link } from "gatsby";

const navStyles = {
  display: "flex",
  justifyContent: "center",
  gap: 30,
  padding: 30,
  listStyleType: "none",
  margin: 0,
  backgroundColor: "gainsboro",
};

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul style={navStyles}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
