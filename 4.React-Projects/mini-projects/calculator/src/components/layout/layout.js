import React from "react";
import Navbar from "../navbar/index";
import Footer from "../footer/index";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="d-flex justify-content-center  align-items-center flex-column pt-2 mb-2">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
