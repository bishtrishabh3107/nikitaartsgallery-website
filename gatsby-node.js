const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
}) => {
  const { createNode } = actions

  createResolvers({
    StrapiPainting: {
      image1_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiPainting: {
      image2_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image2.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
  createResolvers({
    StrapiPainting: {
      image3_Child: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: `${source.image3.url}`,
            store,
            cache,
            createNode,
            createNodeId,
          })
        },
      },
    },
  })
}

const { slugify } = require("./src/assets/utilityFunctions")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        paintings: allStrapiPainting {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const paintings = result.data.paintings.edges

  const PaintingTemplate = require.resolve(
    "./src/templates/paintingTemplate.tsx"
  )

  paintings.forEach((painting, index) => {
    createPage({
      path: `/paintings/${slugify(painting.node.uid)}`,
      component: PaintingTemplate,
      context: {
        paintinguid: painting.node.uid,
      },
    })
  })
}
