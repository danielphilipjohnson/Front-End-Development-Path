import React from "react";
import "./Home.css";
import Bg from "../../images/bg.jpg";
import Product from "../../Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={Bg} />
        <div className="home__row">
          <Product
            id="1"
            title="The lean startup"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB1dS4HWYeftUtMYTKlSJhxKK_dtk-J7kJVljnW-zl01X62b7cuyZGn-11S7YHKIYr203-ZriO&usqp=CAc"
            rating={5}
          />

          <Product
            id="2"
            title="Norton 360 Deluxe 2020, Antivirus software for 5 Devices and 1-year subscription with automatic renewal, Includes Secure VPN and Password Manager, PC/Mac/iOS/Android, Activation Code by Post"
            price={17.95}
            image={process.env.PUBLIC_URL + "/images/norton.jpg"}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={49.99}
            image={process.env.PUBLIC_URL + "/images/echodot.jpg"}
            rating={5}
          />
          <Product
            id="4"
            title="Shark HZ400UKT, Vacuum Cleaner, Blue & Grey"
            price={199.99}
            image={process.env.PUBLIC_URL + "/images/sharkhover.jpg"}
            rating={5}
          />
          <Product
            id="5"
            title="
            LEGO 10698 Classic Large Creative Brick Box Construction Set, Toy Storage, Fun Colourful Toy Bricks for Lego Masters"
            price={39.99}
            image={process.env.PUBLIC_URL + "/images/lego.jpg"}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL Paperback – 3 May 2019"
            price={30.99}
            image={process.env.PUBLIC_URL + "/images/reactbook.jpg"}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
