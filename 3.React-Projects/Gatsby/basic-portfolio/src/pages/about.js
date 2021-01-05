import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function about() {
  return (
    <Layout>
      <SEO title="Home" />
      <article class="about-section py-5">
        <div class="container">
          <figure>
            <img
              class="img-fluid"
              src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/banner/banner.png"
              alt="image"
            />
          </figure>
          <p align="center">
            <a
              class="header-badge"
              target="_blank"
              href="https://twitter.com/danielp_johnson"
            >
              <img
                alt="Twitter Follow"
                src="https://img.shields.io/twitter/follow/danielp_johnson?style=social"
              />
            </a>

            <a
              class="header-badge"
              target="_blank"
              href="https://www.linkedin.com/in/daniel-philip-johnson/"
            >
              <img src="https://img.shields.io/badge/style--5eba00.svg?label=LinkedIn&logo=linkedin&style=social" />
            </a>
          </p>
          <h2 class="title mb-3">Introduction</h2>
          <p>
            👋 Hi! I'm a React Developer for codecareer.io I'm currently
            maintaining a hiring system and well as contributing to a job board.
            In my spare time I have a series of side projects im undertaking as
            well as contributing to the community with React and web resources.
            <ul>
              <li> - 😄 Pronouns: Him, he, they</li>
              <li> - 📌 Cornwall</li>
              <li>🏴󠁧󠁢󠁥󠁮󠁧󠁿 - 🎓 Bsc Psychology | University of Plymouth 🏫</li>
              <li> - 🥼 Psychologist turned React developer</li>
              <li>
                🖥️ - A React developer that is looking to collaborate with other
                on react projects
              </li>
              <li>- ❤️ Linux Enthusiastic, React, graphql</li>
              <li>
                - 🖥️ I’m currently using Kubuntu 20.04 and Manjaro 20.0.3{" "}
              </li>
              <li>
                - 🔭 In my spare time I build
                <a href="http://www.linuxfromscratch.org/">
                  linux from scratch
                </a>
              </li>
              <li>
                - ⚡ Fun fact: I started programming with Basic on Commodore 64
                (CBM 64) but never owned a pc until Windows Vista in 2008 😑. My
                desktop 🖥️ was Packard Bell iMedia x2414 with an enormous amount
                of Ram totalling 2GB. It did not take too long for me to
                consider my options and use Ubuntu 9.04 (Jaunty Jackalope).
                From, there I have used Linux ever since and yes, I use KDE for
                my GUI "you know what they say old habits die hard."
              </li>
            </ul>
          </p>

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
          <h5 class="mt-5"> 📌 2021 Goals </h5>
          <p>
            <ul>
              <li>
                📌 Conferences I'm attending this year.
                <ul>
                  <li>JSworld Conference: 22-27 Feb 2021</li>
                  <li>Angular Global Summit: 16-17 Feb 2021</li>
                  <li>React JS Case Study Festival: 16-17 March 2021 </li>
                </ul>
              </li>
              <li>
                📓 Skills to improve
                <ul>
                  <li>Gatsby</li>
                  <li>Tailwind</li>
                  <li>GraphQL</li>
                  <li>Redux</li>
                </ul>
              </li>
            </ul>
          </p>

          <section>
            <h2 class="mt-5">Side Projects</h2>

            <article>
              <h4>1. Flexbox Edge Ledger: </h4>

              <a href="https://codepen.io/danielphilipjohnson/pen/JjXbpXa?editors=1010">
                <img
                  className="img-fluid"
                  src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Welcome-To-Edge-Ledger-desktop.png"
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
                    src="https://raw.githubusercontent.com/danielphilipjohnson/danielphilipjohnson/master/portfolio-items/Survery-Form.png"
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
                  />
                </a>
              </p>
            </article>
          </section>
          <section>
            <h5 class="mt-5">My Skills and Experiences</h5>
            <p>
              ### Desktop Environment
              [![Kubuntu](https://img.shields.io/badge/OS-Kubuntu-green?logo=linux&logoColor=white&color=0079C1&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![GNU
              BASH](https://img.shields.io/badge/Bash-v0.0.0-green?logo=gnu-bash&color=282F34&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![KDE](https://img.shields.io/badge/KDE-v0.0.0-green?logo=kde&color=1D99F3&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Coding Editors [![VS
              CODE](https://img.shields.io/badge/VS%20Code-v1.47.3-green?logo=visual-studio-code&color=016EC5&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Vim](https://img.shields.io/badge/Vim-v8.2-green?logo=vim&color=019733&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Languages
              [![Python](https://img.shields.io/badge/Python-v3.8.0-green?logo=python&color=3776AB&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Javascript](https://img.shields.io/badge/Javascript-v11-green?logo=javascript&color=3776AB&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Package Managers
              [![Yarn](https://img.shields.io/badge/Yarn-v1.22.4-green?logo=yarn&color=368FB9&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![NPM](https://img.shields.io/badge/NPM-v6.14.7-green?logo=npm&color=CB3837&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![PyPI](https://img.shields.io/badge/PyPI-v6.14.7-green?logo=PyPI&color=3775A9&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Frontend Skills
              [![HTML5](https://img.shields.io/badge/HTML5-v0.0.0-green?logo=HTML5&color=E34F26&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![CSS3](https://img.shields.io/badge/CSS3-v0.0.0-green?logo=CSS3&color=1572B6&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Sass](https://img.shields.io/badge/Sass-v0.0.0-green?logo=sass&color=CC6699&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              #### CSS frameworks
              [![Bulma](https://img.shields.io/badge/Bulma-v0.0.0-green?logo=bulma&color=00D1B2&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Bootstrap](https://img.shields.io/badge/Bootstrap-v0.0.0-green?logo=bootstrap&color=563D7C&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Tailwind
              CSS](https://img.shields.io/badge/Tailwind%20CSS-v0.0.0-green?logo=Tailwind-CSS&color=38B2AC&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### React Tooling
              [![React](https://img.shields.io/badge/React-v16.13.1-green?logo=react&color=61DBFB&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![React
              Router](https://img.shields.io/badge/React--Router-v5.2.0-green?logo=react-router&color=F94949&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Redux](https://img.shields.io/badge/Redux-v4.0.5-green?logo=redux&color=764ABC&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![graphql](https://img.shields.io/badge/GraphQL-v15.3.0-green?logo=graphql&color=E535AB&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Gatsby](https://img.shields.io/badge/Gatsby-v2.24.37-green?logo=gatsby&color=633194&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Next
              JS](https://img.shields.io/badge/Next.JS-v9.5.1-green?logo=next.js&color=000000&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Testing
              [![Cypress](https://img.shields.io/badge/Cypress-v4.12.1-green?logo=cypress&color=47474A&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Jest](https://img.shields.io/badge/Jest-v26.2.2-green?logo=jest&color=C21325&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Mocha](https://img.shields.io/badge/Mocha-v0.0.0-green?logo=mocha&color=8D6748&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Backend
              [![PHP](https://img.shields.io/badge/PHP-v0.0.0-green?logo=PHP&color=777BB4&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Django](https://img.shields.io/badge/Django-v0.0.0-green?logo=Django&color=092E20&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              ### Storage [![Operating
              system](https://img.shields.io/badge/MongoDB-v0.0.0-green?logo=mongodb&color=10AA50&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![mysql](https://img.shields.io/badge/MySQL-v0.0.0-green?logo=mysql&color=4479A1&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Redis](https://img.shields.io/badge/Redis-v0.0.0-green?logo=redis&color=DC382D&style=for-the-badge)](https://danielphilipjohnson.github.io/)
              [![Operating
              system](https://img.shields.io/badge/NodeJS-v0.0.0-green?logo=node.js&color=84CE24&style=for-the-badge)](https://danielphilipjohnson.github.io/)
            </p>
          </section>

          <section>
            <h3>Stats</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=danielphilipjohnson&layout=compact"
              alt=""
              srcset=""
            />
          </section>

          <section>
            <h3>Outro: ☕ Wanna Chat?</h3>@ me on{" "}
            <a href="https://twitter.com/DanielPhilipJo1">Twitter</a> about any
            of the following topics! 💬\ **ReactJS**: I would love to hear about
            your projects, or help you find helpful resources?\ **JS**: If you
            require any resources, course suggestions or app ideas let me know!\
            **HTML/CSS**: If you want someone to work with on a project and I am
            free, then I will happily collaborate.\ **Psychology**: I love to
            talk about this topic feel free to ask me any questions.\
            **Neuroscience**: My chosen topics are Default Mode Network,
            Perceptual Priming, Implicit Memory and Mental Imagery\ **Other**:
            Talk to me about your favourite video game, I causally play{" "}
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

export default about
