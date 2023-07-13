import path from "path";
import { slugify } from "./src/utils/utils.mjs";
export const createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allDataJson {
        nodes {
          title
        }
      }
    }
  `);
  data.allDataJson.nodes.forEach(({ title }) => {
    actions.createPage({
      path: "/blog/" + slugify(title),
      component: path.resolve("./src/templates/blog.jsx"),
      context: { title },
    });
  });
};
