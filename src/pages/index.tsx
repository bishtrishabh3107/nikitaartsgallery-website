import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Global/Layout"
import "../assets/styles/index.scss"
import SecondScreen from "../components/organ/SecondScreen"
import ThirdScreen from "../components/organ/ThirdScreen"
import FourthScreen from "../components/organ/FourthScreen"
import FifthScreen from "../components/organ/FifthScreen"
import { motion } from "framer-motion"
import SixthScreen from "../components/organ/SixthScreen"

const IndexPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout seo={data.strapiGlobal.seo}>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section id="BestSeller">
          <SixthScreen />
        </section>
        <hr className="border-2"></hr>
        <section id="Spiritual">
          <SecondScreen />
        </section>
        <hr className="border-2"></hr>
        <section id="Modern">
          <ThirdScreen />
        </section>
        <hr className="border-2"></hr>
        <section id="Abstract">
          <FourthScreen />
        </section>
        <hr className="border-2"></hr>
        <section id="Anime">
          <FifthScreen />
        </section>
        <hr></hr>
      </motion.div>
    </Layout>
  )
}

const query = graphql`
  query {
    strapiGlobal {
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          url
        }
      }
    }
  }
`

export default IndexPage
