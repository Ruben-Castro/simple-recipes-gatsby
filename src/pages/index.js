import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
export default function Home() {
  return (
    <Layout >
      <SEO title="Home" description={"page"} />
      <main className="page">
        <header className="hero">
          <StaticImage src="../assets/images/main.jpeg" alt="eggs" className="hero-img" placeholder="tracedSVG" layout="fullWidth" />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>No Fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>


    </Layout>
  )
}
