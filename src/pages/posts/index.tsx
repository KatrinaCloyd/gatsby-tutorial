import * as React from "react";
import { graphql, HeadFC, Link, PageProps } from "gatsby";
import Layout from "../../components/layout";

type PostData = {
  data: {
    allMarkdownRemark: {
      nodes: [
        {
          id: string;
          frontmatter: {
            title: string;
            slug: string;
          };
        }
      ];
    };
  };
};

const sectionWrapper = {
  marginBlock: 20,
};
const linkStyle = {
  marginInlineEnd: 20,
};

const Posts: React.FC<PostData> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  console.log("post pg", posts[0].frontmatter.slug);
  return (
    <Layout pageTitle="Posts Home Page">
      <Link to="/posts/postOne">Post One</Link>
      <h3 style={sectionWrapper}>List of links generated from graphQL query</h3>
      <div style={sectionWrapper}>
        {posts.map((post) => (
          <Link
            to={"/" + post.frontmatter.slug}
            key={post.id}
            style={linkStyle}
          >
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
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

export const query = graphql`
  query PostData {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`;
