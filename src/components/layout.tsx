import * as React from "react";
import { Link } from "gatsby";

type props = {
  pageTitle: string;
  children: React.ReactFragment;
};

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const bodyStyles = {
  maxWidth: "800px",
  margin: "50px auto",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: "50%",
};

const Layout: React.FC<props> = ({ pageTitle, children }) => {
  return (
    <div style={pageStyles}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main style={bodyStyles}>
        <h1 style={headingStyles}>{pageTitle}</h1>
        {children}
      </main>
      <footer>Boop</footer>
    </div>
  );
};

export default Layout;
