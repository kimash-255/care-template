import React from "react";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main>{children}</main>

      {/* Optional: You can add a footer here later */}
      <Footer />
    </div>
  );
};

export default Layout;
