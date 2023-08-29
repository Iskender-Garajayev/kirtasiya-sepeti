import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Authentication from "../../components/Authentication/Authentication";

const Menu = () => {
  return (
    <>
      <Header />

      <div className="main-container">
        <Sidebar/>
        <div className="main">
          <Authentication/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
