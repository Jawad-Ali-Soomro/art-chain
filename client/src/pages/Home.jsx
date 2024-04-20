import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Art from "../components/Art";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>A r t h u b</title>
      </Helmet>
      <Header />
      <Hero />
      <Art />
    </div>
  );
};

export default Home;
