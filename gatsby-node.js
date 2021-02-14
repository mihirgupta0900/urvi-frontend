// https://github.com/strapi/gatsby-source-strapi/issues/127#issuecomment-631442189
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
// const { slugify } = require("./src/utils/");
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  createResolvers({
    strapi_UploadFile: {
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.url}`,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  createNodeId,
  store,
  cache,
}) => {
  const crypto = require(`crypto`);

  if (node.internal.type === "StrapiBlog") {
    const newNode = {
      id: createNodeId(`StrapiBlogContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.content || " ",
        type: "StrapiBlogContent",
        mediaType: "text/markdown",
        contentDigest: crypto
          .createHash("md5")
          .update(node.content || " ")
          .digest("hex"),
      },
    };
    createNode(newNode);
    createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};

const comparesDates = (a, b) => {
  // b - a, since I want descending
  return +new Date(b) - +new Date(a);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      strapi {
        blogs {
          title
          id
        }
        notes {
          title
          id
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogs = result.data.strapi.blogs;
  const BlogTemplate = require.resolve("./src/templates/blog_template.tsx");
  blogs.forEach((blog, index) => {
    createPage({
      path: `/blog/${slugify(blog.title)}`,
      component: BlogTemplate,
      context: {
        id: blog.id,
      },
    });
  });

  const notes = result.data.strapi.notes;
  const NoteTemplate = require.resolve("./src/templates/note_template.tsx");
  // console.log(notes);
  notes.forEach((note, index) => {
    createPage({
      path: `/notes/${slugify(note.title)}`,
      component: NoteTemplate,
      context: {
        id: note.id,
      },
    });
  });
};
