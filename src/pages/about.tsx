import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="I'm am abount.">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>about pages, man... I just can't help myself.</p>
      <br />
      {/* static folder assets available all over, but not optimized */}
      <img src="/giffy.gif" />
      <br />
      <br />
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

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>About Page | Gatsby Tutorial</title>
    <meta name="description" content="About Page... blah blah blah" />
  </>
);
