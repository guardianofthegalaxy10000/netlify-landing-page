import React from "react"
/* import { Link } from "gatsby" */

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import "../styles/pages/how-it-works.scss"

const ThirdPage = () => (
  <Layout>
    <SEO title="How It Works" />
    <section id="how-it-works">

    </section>
    <section className="wave-container">
      <Image className= "wave" filename={"wave.svg"} alt={"description"}/>
      <aside className="directions-list">
        <div className="tag-line">
            <h2>How It Works</h2>
            <h3>Welcome to Netlify Analytics. Enjoy the ride!</h3>
            </div>
            <div className="direction-descriptions">
              <div className="direction">
                <div className="direction-img">
                  <Image filename={"deploy.svg"} alt={"description"}/>
                </div>
                <div className="direction-body">
                  <h3>Delpoy to Netlify</h3>
                  <p>We make it quick and easy to deploy. With everything in one place, all you have to do is connect your repository and your web app will be up.</p>
                </div>
              </div>
              <div className="direction">
                <div className="direction-body">
                  <h3>Make A New Branch</h3>
                  <p>Create a new branch where you want to test out your next idea or feature. We promise not to add any extra JavaScript.</p>
                </div>
                <div className="direction-img">
                  <Image filename={"branch.svg"} alt={"description"}/>
                </div>
              </div>
              <div className="direction">
                <div className="direction-img">
                  <Image filename={"settings.svg"} alt={"description"}/>
                </div>
                <div className="direction-body">
                  <h3>Divide Your Traffic </h3>
                  <p>Using our sliders we make it simple to divide your traffic, from our CDN network, without losing any download performance.</p>
                </div>
              </div>
              <div className="direction">
                <div className="direction-body">
                  <h3>Analyze Real Time Data</h3>
                  <p>Watch your test in real time as they interact with users. We know every second counts on the world wide web.</p>
                </div>
                <div className="direction-img">
                  <Image filename={"data.svg"} alt={"description"}/>
                </div>
              </div>
              <div className="direction">
                <div className="direction-img">
                  <Image filename={"done.svg"} alt={"description"}/>
                </div>
                <div className="direction-body">
                  <h3>Confirmation</h3>
                  <p>Woohoo!! Your test has succeeded in drawing more leads. Now simply add to production and see business grow.</p>
                </div>
              </div>
            </div>
            <div className="questions">
                <h2>Have a question?</h2>
                <h3>Please reach out to our team and we'll help you answer it.</h3>
                <a href="https://www.netlify.com/enterprise/">Contact</a>
                <Image filename={"questions.svg"} alt={"description"}/>
            </div>
        </aside>
    </section>
  </Layout>
)

export default ThirdPage
