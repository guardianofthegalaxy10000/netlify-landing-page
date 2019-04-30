import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.scss"

const IndexPage = ({data}) => (
  data.allMarkdownRemark.edges.map( ({ node }) => (
  <Layout>
    <SEO title="Netlify" keywords={[`Analytics`, `A/B Testing`, `Personalization`]} meta={[`netlify ethan`]} />
    <section id="hero">
      <div className="hero-container">
        <aside className="hero-text">
          <h2>{node.frontmatter.title}</h2>
          <h1>{node.frontmatter.heading}</h1>
          <p>{node.frontmatter.subheading}</p>
          <div className="button-container">
            <a href="https://app.netlify.com/signup">Start Today For Free!</a>
            <Link className="how-it-works" to="/how-it-works/">How It Works</Link>
          </div>
        </aside>
        <aside className="hero-image">
          <Image filename={"trending.svg"} alt={"description"}/>
        </aside>
      </div>
     
    </section>
    <section id="features">
        <Image className= "wave" filename={"wave.svg"} alt={"description"}/>
        <aside className="feature-list">
            <div className="tag-line">
              <h2>Easy out of the box solutions for all  your tests</h2>
              <h3>Here's what makes Netlify Analytics different.</h3>
            </div>
            <div className="feature-descriptions">
              <div className="feature">
                <div className="feature-img">
                  <Image filename={"split-testing.svg"} alt={"description"}/>
                </div>
                <div className="feature-body">
                  <h3>Split Testing</h3>
                  <p>Focus on what matters. Without any extra libraries your developers can spend less time coding and more on user needs.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-body">
                  <h3>Audience Creation</h3>
                  <p>With our audience creation you can customize your site to reach users who match your market and retain them for longer periods of use.</p>
                </div>
                <div className="feature-img">
                  <Image filename={"audience-creation.svg"} alt={"description"}/>
                </div>
              </div>
              <div className="feature">
                <div className="feature-img">
                  <Image filename={"support.svg"} alt={"description"}/>
                </div>
                <div className="feature-body">
                  <h3>5x Fast Support</h3>
                  <p>We're here to help. With our team of developers we can help build tests to improve leads and increase conversion rates fast.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-body">
                  <h3>Built For Everyone</h3>
                  <p>We set no limits on who can use our products. At Netlify we believe in giving every access to our tools.</p>
                </div>
                <div className="feature-img">
                  <Image filename={"user_personlization.svg"} alt={"description"}/>
                </div>
              </div>
              <div className="more-features">
                <div className="tag-line">
                    <h2>Plus all of our other features included</h2>
                    <a href="https://www.netlify.com/features/">More Features</a>
                  </div>
              </div>
            </div>
        </aside>
    </section>
    <section id="results">
        <aside className="trusted-company">
            <p>Netlify Analtyics helps thousands of companies everyday</p>
            <div className="logo-container">
              <Image filename={"hashicorp.svg"} alt={"description"}/>
              <Image filename={"verizon.svg"} alt={"description"}/>
              <Image filename={"citrix.svg"} alt={"description"}/>
            </div>
        </aside>
        <aside className="case-studies">
            <div class="card">
              <div class="media">
                <div class="media-body">
                    <h3>Verizon Case Study</h3>
                    <p>By using Netlify Analytics, Verizon was able to increase leads by 50% and retain users by even more. </p>
                    <br></br>
                    <a href="https://www.netlify.com/case-studies/">Read More</a>
                </div>
                <div class="media-img">
                    <Image filename={"verizon-case-study.svg"} alt={"description"}/>
                </div>
              </div>
            </div>
        </aside>
    </section>
    <section id="resources">
    <Image className= "wave" filename={"wave.svg"} alt={"description"}/>
      <aside class = "text-container">
            <h3>We Believe In Community</h3>
            <h4>How can we help you succeed?</h4>
            <h4>Check out these resources for new ideas, code references, and more.</h4>
      </aside> 
      <aside className="resource-links">
          <div className="column">
            <div className="docs">
              <a href="https://www.netlify.com/docs/split-testing/">Docs</a>
            </div>
            <div className="studies">
              <a href="https://www.netlify.com/case-studies/">Case Studies</a>
            </div>
          </div>
          <div className="column">
            <div className="contact">
              <a href="https://www.netlify.com/enterprise/">Contact</a>
            </div>
            <div className="blog">
              <a href="https://www.netlify.com/blog/">Blog</a>
            </div>
          </div>
          <div className="get-started">
                <div className="tag-line">
                    <a href="https://app.netlify.com/signup" target="_blank" rel="noopener noreferrer">Get Started</a>
                </div>
          </div>
      </aside>
    </section>
  </Layout>
  ))
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: {regex : "/content\/pages/"} }){
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              heading
              subheading
              image
            }
          }
        }
      }
  }
`
