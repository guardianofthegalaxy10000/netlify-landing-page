import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import "../styles/components/footer.scss"

const Footer = ({ }) => (
  <footer className="hr hr--top">
    <div className="logo">
        <Link to="/">
          <Image filename={"logomark-1.svg"} alt={"description"}/>
        </Link>
    </div>
    <form name="contact" class="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
        <p>Sign Up To Receive The Latest Updates</p>
        <div className="sign-up">
            <input type="email" name="email" placeholder="Email"/>
            <button type="submit">Send</button>
        </div>
    </form>
    <div className="footerMenu">
          <Link className="features" to="#features">Features</Link>
          <Link className="pricing" to="/pricing/">Pricing</Link>
          <a className="results" href="https://www.netlify.com/docs/split-testing/">Docs</a>
          <Link className="resources" to="/how-it-works">How It Works</Link>
          <a className="get-started" href="https://app.netlify.com/signup">Get Started</a>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        &
        <a href="https://www.netlify.com">Netlify</a>
        &
        <a href="https://undraw.co/illustrations">UnDraw</a>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
