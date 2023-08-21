import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
