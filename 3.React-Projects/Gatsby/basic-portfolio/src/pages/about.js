import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  const { allMarkdownRemark } = useStaticQuery(
    // graphql`
    //   query {
    //     allMarkdownRemark(
    //       filter: { id: { eq: "07cea04f-e484-5a33-a118-fe30f1bbed91" } }
    //     ) {
    //       edges {
    //         node {
    //           id
    //           html
    //         }
    //       }
    //     }
    //   }
    // `

    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { id: { eq: "1" } } }) {
          edges {
            node {
              html
              frontmatter {
                date
                id
                slug
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <article className="about-section py-5">
        <div className="container">
          <figure>
            <img
              className="img-fluid"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/banner/banner.png"
              alt="banner"
            />
          </figure>
          <p align="center">
            <a
              className="header-badge"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/danielp_johnson"
            >
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/danielp_johnson?style=social"
              />
            </a>

            <a
              className="header-badge"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
            >
              <img
                src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social"
                alt="my social stats"
              />
            </a>
          </p>
          <h2 className="title mb-3">Introduction</h2>
          <p>
            <span role="img" aria-label="wave">
              {" "}
              👋
            </span>
          </p>
          Hi! I'm a React Developer for codecareer.io I'm currently maintaining
          a hiring system and well as contributing to a job board. In my spare
          time I have a series of side projects im undertaking as well as
          contributing to the community with React and web resources.
          <ul>
            <li>
              <span role="img" aria-label="happy">
                😄
              </span>
              Pronouns: Him, he, they
            </li>
            <li>
              <span role="img" aria-label="my location">
                📌
              </span>
              Cornwall
              <span role="img" aria-label="England">
                🏴󠁧󠁢󠁥󠁮󠁧󠁿
              </span>
            </li>
            <li>
              <span role="img" aria-label="education">
                🎓
              </span>
              Bsc Psychology | University of Plymouth
              <span role="img" aria-label="university">
                🏫
              </span>
            </li>
            <li>
              <span role="img" aria-label="Lab coat">
                🥼
              </span>
              Psychologist turned React developer
            </li>
            <li>
              <span role="img" aria-label="Computer">
                🖥️
              </span>
              A React developer that is looking to collaborate with other on
              react projects
            </li>
            <li>
              <span role="img" aria-label="love">
                ❤️
              </span>
              Linux Enthusiastic, React, graphql
            </li>
            <li>
              <span role="img" aria-label="computer">
                🖥️
              </span>
              I’m currently using Kubuntu 20.04 and Manjaro 20.0.3
            </li>
            <li>
              <span role="img" aria-label="science">
                🔭
              </span>
              <span>
                In my spare time I build
                <a href="http://www.linuxfromscratch.org/">
                  linux from scratch
                </a>
              </span>
            </li>
            <li>
              <span role="img" aria-label="lighting">
                ⚡
              </span>{" "}
              Fun fact: I started programming with Basic on Commodore 64 (CBM
              64) but never owned a pc until Windows Vista in 2008{" "}
              <span role="img" aria-label="angry">
                😑
              </span>
              . My desktop
              <span role="img" aria-label="my computer">
                🖥️
              </span>
              {"  "}
              <p>
                {" "}
                was Packard Bell iMedia x2414 with an enormous amount of Ram
                totalling 2GB. It did not take too long for me to consider my
                options and use Ubuntu 9.04 (Jaunty Jackalope). From, there I
                have used Linux ever since and yes, I use KDE for my GUI "you
                know what they say old habits die hard."
              </p>
            </li>
          </ul>
          <h3>About me</h3>
          <p>
            I discovered programming as a young child by helping my mother
            program the game Blue Meanies from Outer Space into the Commodore 64
            (CBM 64) memory. Then while at college, I spent my free time playing
            Xbox and came across XNA Game Studio 3.0 in 2008. This idea of
            making games for Xbox seemed cool to me. So I started to learn C#
            and eventually built an RPG game from the toolkit they provided.
            After I finished college, I progressed to university studying
            psychology with little free time. My next year I switched to
            neuroscience where once again I fell in love with programming. It
            required using a samba Linux server and creating experiments with
            python and using libraries such as pandas, NumPy and matplotlib to
            plot and analysis data. Then slowly in my free time, I started
            learning web development with freecodecamp and udacity and late
            moving to react.
          </p>
          <h5 className="mt-5">
            <span role="img" aria-label="pin">
              📌{" "}
            </span>
            2021 Goals
          </h5>
          <ul>
            <li>
              <span role="img" aria-label="pin">
                📌{" "}
              </span>
              Conferences I'm attending this year.
              <ul>
                <li>JSworld Conference: 22-27 Feb 2021</li>
                <li>Angular Global Summit: 16-17 Feb 2021</li>
                <li>React JS Case Study Festival: 16-17 March 2021 </li>
              </ul>
            </li>
            <li>
              <span role="img" aria-label="notepad">
                📓{" "}
              </span>
              Skills to improve
              <ul>
                <li>Gatsby</li>
                <li>Tailwind</li>
                <li>GraphQL</li>
                <li>Redux</li>
              </ul>
            </li>
          </ul>
          <section>
            <h2 className="mt-5">Side Projects</h2>

            <article>
              <h4>1. Flexbox Edge Ledger: </h4>

              <a href="https://codepen.io/danielphilipjohnson/pen/JjXbpXa?editors=1010">
                <img
                  className="img-fluid"
                  src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Welcome-To-Edge-Ledger-desktop.png"
                  alt="Edge Ledger"
                />
              </a>
            </article>

            <article>
              <h4>2. NewsSite:</h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/pen/oNxwpLN">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/News-Site.png"
                    alt="News website"
                  />
                </a>
              </p>
            </article>
            <article>
              <h4> 3. Portfolio:</h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/full/JjXmZGj">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Portfolio.jpg"
                    alt="Portfolio site"
                  />
                </a>
              </p>
            </article>

            <article>
              <h4> 4. A Tribute Page: </h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/full/VwaJrPg">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Tribute-Page.png"
                    alt="Tribute Page"
                  />
                </a>
              </p>
            </article>

            <article>
              <h4>5. Webpage Including Form: </h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/full/oNxabPN">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusecontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Survery-Form.png"
                    alt="Survery Form"
                  />
                </a>
              </p>
            </article>

            <article>
              <h4> 6. Landing Page:</h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/full/LYNgrGV">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Product-Landing-Page.jpg"
                    alt="Product Landing Page"
                  />
                </a>
              </p>
            </article>

            <article>
              <h4> 7. Technical Documentation:</h4>
              <p>
                <a href="https://codepen.io/danielphilipjohnson/full/PoNVJLW">
                  <img
                    className="img-fluid"
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Technical-Documentation.png"
                    alt="Technical Documentation"
                  />
                </a>
              </p>
            </article>
          </section>
          <section className="text-center my-4">
            {allMarkdownRemark.edges.map(({ node }) => (
              <p dangerouslySetInnerHTML={{ __html: node.html }}></p>
            ))}
          </section>
          <section>
            <h3>Stats</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielphilipjohnson&layout=compact"
              alt=""
            />
          </section>
          <section>
            <h3>
              Outro:{" "}
              <span role="img" aria-label="cafe">
                ☕
              </span>{" "}
              Wanna Chat?
            </h3>
            @ me on <a href="https://twitter.com/DanielPhilipJo1">Twitter</a>{" "}
            about any of the following topics!{" "}
            <span role="img" aria-label="chat">
              💬
            </span>
            \ **ReactJS**: I would love to hear about your projects, or help you
            find helpful resources?\ **JS**: If you require any resources,
            course suggestions or app ideas let me know!\ **HTML/CSS**: If you
            want someone to work with on a project and I am free, then I will
            happily collaborate.\ **Psychology**: I love to talk about this
            topic feel free to ask me any questions.\ **Neuroscience**: My
            chosen topics are Default Mode Network, Perceptual Priming, Implicit
            Memory and Mental Imagery\ **Other**: Talk to me about your
            favourite video game, I causally play{" "}
            <a href="https://fortnitetracker.com/profile/all/undreamt%20mayhem">
              Fortnite
            </a>{" "}
            or what you are currently watching? Suggestions always appreciated!\
          </section>
        </div>
      </article>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default About
