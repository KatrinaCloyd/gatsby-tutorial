import * as React from "react";
import { graphql, Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: "50%",
};
const headingAccentStyles = {
  color: "#663399",
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "About Page",
    url: "/about",
    description: "Here is the about page with a lil blurb...",
    color: "#da00e9",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const IndexPage: React.FC<PageProps> = ({ data }) => {
  // with query exported below we now have access to the data
  console.log("home page data: ", data);
  return (
    <Layout pageTitle="Home Again - Home Again">
      <h2 style={headingStyles}>
        Trying to make
        <span style={headingAccentStyles}> and understand </span>a Gatsby site
        (how do they work?).
      </h2>
      <p>All of this stuff is basic React components and structure.</p>
      <p>
        I need to understand about the flow of data, graphQL, and working with
        Contentful
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              {/* Gatsby Link preloads like Next Link to prevent whole page load */}
              <Link style={linkStyle} to={link.url}>
                {link.text}
              </Link>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Page Title Here | Gatsby Tutorial</title>
    <meta
      name="description"
      content="Page Description goes here... blah blah blah"
    />
  </>
);

// example of a page query
export const query = graphql`
  query SiteInfo {
    site {
      host
      siteMetadata {
        siteUrl
        description
        title
      }
    }
  }
`;
