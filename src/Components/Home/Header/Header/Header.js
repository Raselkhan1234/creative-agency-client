import React from "react";
import Background from "../Background/Background";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <section>
      <div style={{ backgroundColor: "#FBD062" }}>
        <Navbar/>
        <Background/>
      </div>
      <div>
        <Logo/>
      </div>
    </section>
  );
};

export default Header;
