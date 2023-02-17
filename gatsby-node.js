const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query PostList {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/post-detail.tsx"),
      context: { id: node.id },
    });
  });
};
