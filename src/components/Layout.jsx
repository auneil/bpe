import React from "react";
import "../../static/style/foundation.css";
import "../../static/style/responsive.css";
import "../../static/style/icons.css";
import "../../static/style/style.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="main-container">
      
      <Header />
      {children}
      <Footer />
    </div>
  );
}
