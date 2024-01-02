import React from "react";
import "./App.css";
import img from "./assets/fortnite-pictures.jpg";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";

const App = () => {
  return (
    <>
      <div className="base">
        <div className="text1">
          <h4>
            Epic Games : An American video game and software developer and
            publisher based in Cary, North Carolina.
          </h4>
        </div>
        <div className="image">
          <img className="fortnite-picture" alt="Fortnite pictures" src={img} />
        </div>
        <div className="text2">
          <h5>
            Create, play, and battle with friends for free in Fortnite. Be the
            last player standing in Battle Royale and Zero Build, experience a
            concert or live event, or discover over a million creator made
            games, including racing, parkour, zombie survival, and more. Each
            Fortnite island has an individual age rating so you can find the one
            that's right for you and your friends. Find it all in Fortnite ...
            Drop In.
          </h5>
        </div>
        <div>
          <button className="btn">Visit Website</button>
        </div>
        <div className="card">
          <div className="first">
            <img src={card1} alt="card1" />
            <h5>
              Explore large, destructible environments where no two games are
              ever the same.
            </h5>
          </div>
          <div className="second">
            <img src={card2} alt="card1" />
            <h5>
              Explore large, destructible environments where no two games are
              ever the same.
            </h5>
          </div>
          <div className="third">
            <img src={card3} alt="card1" />
            <h5>
              Explore large, destructible environments where no two games are
              ever the same.
            </h5>
          </div>
        </div>

        <div className="contribution">
          <h1>Our Contribution</h1>
          <h3>
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </h3>
        </div>

        <div className="users">
          <div className="user1">
            <h1>5M</h1>
            <h4>Daily User <br /> Engagements</h4>
          </div>
          <div className="user2">
            <h1>$500K</h1>
            <h4>Revenue Surge for an <br /> Platform</h4>
          </div>
          <div className="user3">
            <h1>10X</h1>
            <h4>ROAS on all our <br /> marketing campaigns</h4>
          </div>
        </div>

        <div className="contact">
        <h1>Interested in delving deeper into the project?</h1>
        <h4>If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at hello@abc.com or give us a call at +91 480 20802730.</h4>
        </div>Ring us on Skype

        <div className="cnt-btn">
          <div><button className="btn1">Ring us on Skype</button></div>
          <div>
          <button className="btn2">Contact Us</button>

          </div>
        </div>

        <div className="rights">
          <p>© 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default App;
