import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import "./blog.css"
import Header from "../header"

import Footer from "../Sitewide/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFileAlt, faObjectUngroup } from "@fortawesome/free-regular-svg-icons"

import { faMobileAlt, faDesktop } from "@fortawesome/free-solid-svg-icons"

function RecentBlogs() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 20
          skip: 0
          filter: { frontmatter: { type: { eq: "blog" } } }
        ) {
          edges {
            node {
              excerpt
              id
              timeToRead
              frontmatter {
                date
                id
                slug
                title
                cover
              }
            }
          }
        }
      }
    `
  )
  console.log(allMarkdownRemark)
  return (
    <>
      <header id="welcome-section">
        <div className="header-content">
          <h1 className="text-white">I Am Daniel Philip Johnson</h1>
          <h2 className="text-white">
            I'm a React Developer
            <span
              className="txt-type"
              data-wait="3000"
              data-words='[" React Developer" ," Python Developer" ," Linux
            Enthuastic" ]'
            ></span>
          </h2>
          <p className="lead">
            Front End Engineer at CodeCareer.io who specialises with React |
            Javascript ECMA 5-11| Tailwind | Bootstrap 4 | SASS | CSS | HTML
          </p>

          <div className="badge-contact-sm">
            <a href="https://codepen.io/danielphilipjohnson/" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/codepen.png"
                alt="codepen"
              />
            </a>
            <a href="#" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/dev.webp"
                alt="dev blog"
              />
            </a>
            <a
              href="https://www.instagram.com/danielphilipjohnson/"
              target="_blank"
            >
              <img
                src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/instagram.jpg"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
              target="_blank"
            >
              <img
                src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href="https://twitter.com/danielp_johnson" target="_blank">
              <img
                src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/social-icons/twitter.png"
                alt="twitter"
              />
            </a>
          </div>
          <>
            <a
              href="https://github.com/danielphilipjohnson/"
              id="profile-link"
              target="_blank"
              className="btn-medium"
            >
              View My Work
            </a>
          </>
        </div>
      </header>
      <section id="home">
        <section id="home-tools" className="text-center py-2">
          <div className="container">
            <p className="lead">
              A React Developer that makes web apps for mobiles, tablets and
              desktops while focusing on accessbility and responsiveness.
            </p>
            <h2 className="section-title">I build with</h2>
            <div className="bottom-line"></div>

            <div className="specials">
              <div>
                <img
                  src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/js.png"
                  alt="js"
                />
                <h3>JavaScript</h3>
                <p>
                  I have been using JavaScript for over two years which I have
                  built numerous projects and web apps.
                </p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/react.svg"
                  alt="react"
                />
                <h3>React</h3>
                <p>
                  I have built numerous projects with React which include a
                  Markdown Previewer, Drum Machine and a portfolio. Currently
                  I'am finishing of an amazon clone.
                </p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/Redux1.png"
                  alt="Redux"
                />
                <h3>Redux</h3>
                <p>
                  I use this as my current state manager. I have over a years
                  experience.
                </p>
              </div>

              <div>
                <img
                  src="https://raw.githubusercontent.com/danielphilipjohnson/Free-Code-Camp-Portfolio-2018-2019/master/1.Responsive-Web-Design-Certification/5.Personal-Portfolio-Webpage/img/logos/GraphQL.png"
                  alt="GraphQL"
                />
                <h3>GraphQL</h3>
                <p>
                  I use GraphQL as query language for my API's. I have been
                  using this for almost a year.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="home-stats" className="text-center py-2">
          <div className="stats">
            <div className="stat-item">
              <ul>
                <li>
                  <i className="fas fa-users fa-3x"></i>
                </li>
                <li className="stats-number">100</li>
                <li className="stats-title">Happy Clients</li>
              </ul>
              <span className="br"></span>
            </div>

            <div className="stat-item">
              <ul>
                <li>
                  <i className="fas fa-award fa-3x"></i>
                </li>
                <li className="stats-number">35</li>
                <li className="stats-title">Awards Received</li>
              </ul>
              <span className="br"></span>
            </div>

            <div className="stat-item">
              <ul>
                <li>
                  <i className="fas fa-hourglass-start fa-3x"></i>
                </li>
                <li className="stats-number">3500</li>
                <li className="stats-title">Cups of coffee</li>
              </ul>
              <span className="br"></span>
            </div>

            <div className="stat-item">
              <ul>
                <li>
                  <i className="fas fa-code-branch fa-3x"></i>
                </li>
                <li className="stats-number">135</li>
                <li className="stats-title">Projects Completed</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="home-services" className="text-center py-2">
          <div className="container">
            <h2 className="section-title">Services</h2>
            <div className="bottom-line"></div>
            <p className="lead">
              All of my UI/UX and design projects are based off of a practiced
              formula to get the result that I am looking for
            </p>
            <div className="process">
              <div>
                <FontAwesomeIcon
                  icon={faFileAlt}
                  size="4x"
                  className="process-icon my-2"
                />
                <h3>Bring Your Design to Life</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptas laborum repellendus dolorum! Harum,
                  cupiditate.
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faDesktop}
                  size="4x"
                  className="process-icon my-2"
                />
                <h3>Web Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptas laborum repellendus dolorum! Harum,
                  cupiditate.
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faObjectUngroup}
                  size="4x"
                  className="process-icon my-2"
                />
                <h3>Project Planning</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptas laborum repellendus dolorum! Harum,
                  cupiditate.
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  size="4x"
                  className="process-icon my-2"
                />
                <h3>Mobile Applications</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores voluptas laborum repellendus dolorum! Harum,
                  cupiditate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  )
}

export default RecentBlogs
