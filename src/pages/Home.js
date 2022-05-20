import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";
import { useState } from "react";
import { ConnectButton, Icon, Select, DatePicker, Input } from "web3uikit";
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
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => console.log(data.label)}
              options={[
                { id: "NYC", label: "New York City" },
                { id: "AUS", label: "Australia" },
                { id: "MLD", label: "Maldives" },
                { id: "BA", label: "Bali" },
              ]}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="CheckIn"
              onChange={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker
              id="CheckOut"
              onChange={(event) => console.log(event.date)}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="AddGuests"
              type="number"
              onChange={(event) => console.log(Number(event.target.value))}
            />
          </div>
          <div className="searchButton">
            <Icon fill="#ffffff" size={22} svg="search" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
