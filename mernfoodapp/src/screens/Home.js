import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
