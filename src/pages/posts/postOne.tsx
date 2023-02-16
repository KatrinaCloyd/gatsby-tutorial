import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";

const PostOne: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Post One Page">
      <h2>Test To Show Subpage</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae,
        consectetur nisi modi libero ipsam qui quos eum, reprehenderit in
        deserunt ab quibusdam, doloremque at vitae quasi officia repellat
        commodi.
      </p>
    </Layout>
  );
};

export default PostOne;

export const Head: HeadFC = () => (
  <>
    <title>About Page | Gatsby Tutorial</title>
    <meta name="description" content="About Page... blah blah blah" />
  </>
);
