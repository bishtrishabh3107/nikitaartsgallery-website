import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import PaintingMainScreenCard from "../atom/PaintingMainScreenCard"
import { motion } from "framer-motion"
import { GiLindenLeaf } from "react-icons/gi"
import ReactTextTransition, { presets } from "react-text-transition"

const TEXTS = ["SPIRITUAL PAINTINGS", "GOD PAINTINGS"]

function SecondScreen() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition },
    },
  }
  return (
    <div className="my-5 my-5">
      <h1 className="flex flex-row justify-center goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl xxl:text-8xl">
        <ReactTextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />

        <div className="text-green-500 flex flex-row mx-1">
          <GiLindenLeaf />
          <GiLindenLeaf />
        </div>
      </h1>
      <StaticQuery
        query={SecondScreenQuery}
        render={data => {
          return (
            <>
              <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
              >
                <div className="sm:mx-2 md:mx-4 lg:mx-10 my-5 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-5">
                  {data.allStrapiPainting.edges.map(({ node }) => (
                    <div key={node.paintingID} className="m-2">
                      <motion.div variants={thumbnailVariants}>
                        <PaintingMainScreenCard
                          uid={node.uid}
                          productID={node.paintingID}
                          image1={
                            node.image1_Child.childImageSharp.gatsbyImageData
                          }
                          name={node.name}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </>
          )
        }}
      />
    </div>
  )
}

export default SecondScreen

const SecondScreenQuery = graphql`
  {
    allStrapiPainting(
      filter: {
        categories: { elemMatch: { name: { eq: "Spiritual Paintings" } } }
      }
      limit: 6
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          name
          uid
          paintingID
          image1_Child {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                aspectRatio: 1
                layout: CONSTRAINED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
