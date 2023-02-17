import * as React from "react";
import NavBar from "./navbar";
import "../styles/global.css";

type props = {
  pageTitle: string;
  children: React.ReactFragment;
};

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  flexFlow: "column wrap",
  minHeight: "100vh",
};
const bodyStyles = {
  maxWidth: "800px",
  margin: "50px auto",
  flexGrow: 1,
  "&p": {
    border: "red solid 1px",
  },
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: "50%",
};
const navStyles = {
  display: "flex",
  justifyContent: "center",
  gap: 30,
  padding: 30,
  listStyleType: "none",
};

const Layout: React.FC<props> = ({ pageTitle, children }) => {
  return (
    <div style={pageStyles}>
      <NavBar />
      <main style={bodyStyles}>
        <h1 style={headingStyles}>{pageTitle}</h1>
        {children}
      </main>
      <footer
        style={{
          padding: 20,
          textAlign: "center",
          backgroundColor: "gainsboro",
        }}
      >
        Beep 🤖 Bop 🤖 Boop
      </footer>
    </div>
  );
};

export default Layout;
