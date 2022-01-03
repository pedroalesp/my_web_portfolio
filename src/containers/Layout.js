import React from "react";

import Footer from "./Footer";
import Banner from "./Banner";

const Layout = ({ children }) => (
  <>
    {children}
    <Banner />
    <Footer />
  </>
);

export default Layout;
