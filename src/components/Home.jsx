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
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero est
          praesentium at assumenda eveniet ab perspiciatis, atque beatae
          deleniti sit, cupiditate nihil aliquam, minus ut voluptate voluptatem
          aperiam? Asperiores, consequuntur. Laborum, quaerat rem.
        </p>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are? </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            atque ducimus magni vitae, corporis officia doloremque sint ab,
            veniam nam maiores reprehenderit, dolorum officiis voluptatibus
            sapiente. Autem rerum quisquam velit sunt nobis, soluta harum saepe
            explicabo ea accusamus ab laboriosam quia blanditiis ullam non nihil
            nesciunt. Laboriosam assumenda vero beatae?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Error saepe odit dicta veniam
            officia placeat, perferendis mollitia eveniet reprehenderit in
            nesciunt deserunt blanditiis recusandae nostrum aliquam alias aut
            tempore! Voluptatem impedit velit, libero officia ad corporis ipsum
            molestiae illum. Libero nulla obcaecati mollitia repellat at tenetur
            ullam porro nemo distinctio.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{
                animationDelay:"0.3s",
             } }>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>

            <div style={{
                animationDelay:"0.5s",
             } }>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>

            <div style={{
                animationDelay:"0.7s",
             } }>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <div style={{
                animationDelay:"1s",
             } }>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>

        </div>
      </div>
    </>
  );
};

export default Home;
