import React from "react";
import Client from "../Client/Client";
import Footer from "../Footer/Footer";
import Header from "../Header/Header/Header";
import Services from "../Services/Services/Services";
import SlideImage from "../SlideImage/SlideImage/SlideImage";


const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <SlideImage/>
      <Client/>
      <Footer/>
    </div>
  );
};

export default Home;
