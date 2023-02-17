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
      // path for the pages
      path: "/" + node.frontmatter.slug,
      // template page to use for these pages
      component: path.resolve("./src/templates/post-detail.tsx"),
      // query to pass to page for the content specific query
      context: { id: node.id },
    });
  });
};
