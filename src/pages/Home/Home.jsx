import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
const Home = () => {
  return (
    <div className="home">
       <div className="header-container">
        <Header />
      </div>
      <div className="exploreMenu">
        <ExploreMenu />
      </div>
    </div>
  );
};

export default Home;
