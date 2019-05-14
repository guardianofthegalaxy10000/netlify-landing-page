import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import { slide as Menu } from "react-burger-menu"
import Headroom from "react-headroom"

import "../styles/components/header.scss"
import "../styles/components/mobileMenu.scss"

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;



class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    const targetBody = document.querySelector("body");
    const headroom = document.querySelector("#headroom");
    if(state.isOpen){
      disableBodyScroll(targetBody);
      headroom.classList.remove("headroom--unpinned");
      headroom.classList.add("headroom--unfixed");
      }else{
      enableBodyScroll(targetBody);
      headroom.classList.add("headroom--unpinned");
      headroom.classList.remove("headroom--unfixed");
    }
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    return (
      <Menu  isOpen={this.state.menuOpen}
      onStateChange={(state) => this.handleStateChange(state)} id={ "mobileMenu" } width={ '100%' } right>
        <Link onClick={() => this.closeMenu()} className="home hr" to="/">Home</Link>
         <Link onClick={() => this.closeMenu()} className="features" to="#features">Features</Link>
        <Link onClick={() => this.closeMenu()} className="pricing" to="/pricing/">Pricing</Link>
        <a onClick={() => this.closeMenu()} className="results" href="https://www.netlify.com/docs/split-testing/">Docs</a>
        <Link onClick={() => this.closeMenu()} className="how-it-works" to="/how-it-works">How It Works</Link>
        <a onClick={() => this.closeMenu()} href="https://app.netlify.com/signup"  className="get-started" to="/">Get Started</a>
      </Menu>
    )
  }
}

const Header = ({ siteTitle }) => (
  <Headroom id={"headroom"}>
  <header id="navbar">
    <MobileMenu/>
    <nav className="header-nav">
      <div className="header-logo-container">
        <Link to="/">
        <Image className="header-logo" filename={"netlify-dark.svg"} >
         {siteTitle}
        </Image>
        <span>Analytics</span>
        </Link>
      </div>
      <div className="header-menu-container">
      <Link className="features" to="#features">Features</Link>
          <Link className="pricing" to="/pricing/">Pricing</Link>
          <a className="results" href="https://www.netlify.com/docs/split-testing/">Docs</a>
          <Link className="how-it-works" to="/how-it-works">How It Works</Link>
          <a href="https://app.netlify.com/signup"  className="get-started" to="/">Get Started</a>
      </div>
    </nav>
  </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
