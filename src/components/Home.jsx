import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechSolutions</h1>
          <p>Solution to all your technical problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <p>
          TECHSOLUTIONS is a company that offers all kinds of IT solutions to
          its customers. It provides consultation and deployment services for
          small, medium and large businesses.
        <br />
        <br />
          TECHSOLUTIONS provides a wide range of services such as web hosting,
          network management, email management and more. All these services are
          delivered through industry-leading products with high-quality
          standards and at competitive prices.
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are? </h1>
          <p>
            TECHSOLUTIONS is an IT and software solution provider. They provide
            different services to their clients, including web design and
            development, application development, digital marketing, and more.
            <br />
            <br />
            TECHSOLUTIONS is a company that provides IT solutions for both small
            businesses and large enterprises. They provide solutions for a wide
            range of industries such as healthcare, retail, education, finance
            and more. TECHSOLUTIONS also offers web design and development
            services for the websites of their clients.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
