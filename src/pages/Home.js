import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";
import { ConnectButton } from "web3uikit";
const Home = () => {
  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>
      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div>
        <div className="tabs">
          <div className="selected">Places To stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">Location</div>
          <div className="vl" />
          <div className="inputs">Check In</div>
          <div className="vl" />
          <div className="inputs">Check Out</div>
          <div className="vl" />
          <div className="inputs">Guests</div>
        </div>
      </div>
    </>
  );
};

export default Home;
