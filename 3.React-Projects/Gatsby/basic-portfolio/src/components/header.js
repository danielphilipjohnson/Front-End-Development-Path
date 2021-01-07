import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

import { faUser } from "@fortawesome/free-regular-svg-icons"
library.add(
  fab,
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen
)

function Header({ siteTitle }) {
  const { site, profilePhoto } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            profileImage
            socials {
              link
              FontAwesomeIcon {
                logo
                type
              }
            }
          }
        }
        profilePhoto: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <header className="header text-center">
      <h1 className="blog-name pt-lg-4 mb-0">
        <a href="index.html">{siteTitle}</a>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navigation" className="collapse navbar-collapse flex-column">
          <div className="profile-section pt-3 pt-lg-0">
            <Img
              className="profile-image mb-3 rounded-circle mx-auto"
              fluid={profilePhoto.childImageSharp.fluid}
              alt="profile"
            />

            <div className="bio mb-3">
              {site.siteMetadata.description}
              <br />
              <Link to={"/about"}>Find out more about me</Link>
            </div>

            <ul className="social-list list-inline py-3 mx-auto">
              {site.siteMetadata.socials.map(social => {
                return (
                  <li className="list-inline-item" key={social.link}>
                    <a href={social.link}>
                      <FontAwesomeIcon
                        icon={[
                          `${social.FontAwesomeIcon.type}`,
                          `${social.FontAwesomeIcon.logo}`,
                        ]}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
            <hr />
          </div>

          <ul className="navbar-nav flex-column text-left">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <i className="fas fa-home fa-fw mr-2"></i>Blog Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">
                <i className="fas fa-bookmark fa-fw mr-2"></i>Blog Post
              </a> */}
              <Link to="/about" className="nav-link">
                <i className="fas fa-user fa-fw mr-2"></i>About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Find out more about me
              </Link>
            </li>
          </ul>

          <div className="my-2 my-md-3">
            <a className="btn btn-primary" href="/" target="_blank">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
