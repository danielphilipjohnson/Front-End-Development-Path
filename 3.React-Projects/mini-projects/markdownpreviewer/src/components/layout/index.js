import React from "react";

import Navbar from "../navbar/navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
