import React from "react";
import Navbar from "../navbar/index";
import Footer from "../footer/index";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
