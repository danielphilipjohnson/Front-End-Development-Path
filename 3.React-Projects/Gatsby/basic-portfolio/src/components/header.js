import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

import { faHome } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons"
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
            <img
              className="profile-image mb-3 rounded-circle mx-auto"
              // fluid={profilePhoto.childImageSharp.fluid}
              src={site.siteMetadata.profileImage}
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
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <FontAwesomeIcon icon={faBookmark} className="mr-2" />
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                About Me
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
