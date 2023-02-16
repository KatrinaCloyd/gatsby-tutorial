import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";

const Posts: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Posts Home Page">
      <Link to="/posts/postOne">Post One</Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae,
        consectetur nisi modi libero ipsam qui quos eum, reprehenderit in
        deserunt ab quibusdam, doloremque at vitae quasi officia repellat
        commodi. Fugiat beatae, consectetur nisi modi libero ipsam qui quos eum,
        reprehenderit in deserunt ab quibusdam, doloremque at vitae quasi
        officia repellat commodi.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae,
        consectetur nisi modi libero ipsam qui quos eum, reprehenderit in
        deserunt ab quibusdam, doloremque at vitae quasi officia repellat
        commodi.
      </p>
    </Layout>
  );
};

export default Posts;

export const Head: HeadFC = () => (
  <>
    <title>Posts Page | Gatsby Tutorial</title>
    <meta name="description" content="About Page... blah blah blah" />
  </>
);
