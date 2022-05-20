import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Rentals = () => {
  const { state: searchFilters } = useLocation();
  return (
    <>
      <Link to="/"> Home </Link>
      {searchFilters && (
        <div onClick={() => console.log(searchFilters)}>HI</div>
      )}
    </>
  );
};

export default Rentals;
