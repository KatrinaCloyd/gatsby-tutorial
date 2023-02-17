import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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
  // example of a static query
  // cannot use query variables here
  // can only use this hook one time in each component
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log("nav data: ", data.site.siteMetadata.title);
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
