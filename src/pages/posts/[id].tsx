import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";

const DynamicPostPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Post One Page">
      <h2>Test To Show Dynamic Subpage Based On Data</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae,
        consectetur nisi modi libero ipsam qui quos eum, reprehenderit in
        deserunt ab quibusdam, doloremque at vitae quasi officia repellat
        commodi.
      </p>
    </Layout>
  );
};

export default DynamicPostPage;

export const Head: HeadFC = () => (
  <>
    <title>Specific Post Page | Gatsby Tutorial</title>
    <meta name="description" content="Post detail page... blah blah blah" />
  </>
);
