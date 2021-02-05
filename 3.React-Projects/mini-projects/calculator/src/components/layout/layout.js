import React from "react";
import Navbar from "../navbar/index";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
