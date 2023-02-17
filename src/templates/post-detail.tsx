import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import Layout from "../components/layout";

type PostData = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
  };
};

// TEMPLATE PAGE FOR DYNAMIC POST PAGE
// like [id].tsx syntax in next
// does not have to be in templates folder
// just need to link to correct path in gatsby-node file

const DynamicPostPage: React.FC<PostData> = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;
  console.log("dtailpage", title);
  return (
    <Layout pageTitle={title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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

export const Head: HeadFC<PostData> = ({ data }) => (
  <>
    <title>{`${data.markdownRemark.frontmatter.title}  | Gatsby Tutorial`}</title>
    <meta name="description" content="Post detail page... blah blah blah" />
  </>
);

export const query = graphql`
  query PostDetails($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
