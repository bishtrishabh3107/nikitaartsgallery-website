import React from "react"
import { graphql, StaticQuery } from "gatsby"
import "../../assets/styles/index.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import ReactTextTransition, { presets } from "react-text-transition"
import { Link } from "gatsby"

const TEXTS = ["BEST SELLERS", "POPULARS", "IN-SPOTLIGHT"]

function BestSellerCarousel() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex(index => index + 1),
      2000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])
  return (
    <div className="mt-4">
      <h1 className="flex flex-row justify-center goodsumpire-font uppercase font-extrabold text-sm lg:text-lg xl:text-xl xxl:text-8xl">
        <ReactTextTransition
          text={TEXTS[index % TEXTS.length]}
          springConfig={presets.wobbly}
        />
      </h1>
      <div className="-mt-24">
        <StaticQuery
          query={BestSellerCarouselQuery}
          render={data => {
            return (
              <>
                <Carousel
                  autoPlay={true}
                  swipeable={true}
                  showArrows={false}
                  infiniteLoop={true}
                  showIndicators={false}
                  showStatus={false}
                  interval={4000}
                  showThumbs={false}
                >
                  {data.allStrapiPainting.edges.map(({ node }) => (
                    <div key={node.paintingID} className="m-2">
                      <div>
                        <Link
                          className="flex flex-col"
                          to={`/paintings/${node.uid}`}
                        >
                          <GatsbyImage
                            image={getImage(node.image1_Child)}
                            alt={node.name}
                          />
                        </Link>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </>
            )
          }}
        />
      </div>
    </div>
  )
}

export default BestSellerCarousel

const BestSellerCarouselQuery = graphql`
  {
    allStrapiPainting(
      filter: { categories: { elemMatch: { name: { eq: "Best Sellers" } } } }
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
