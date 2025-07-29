import React from "react";
import Headers from "../../components/headers/Headers";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";

const Layout = () => {
  return (
    <div>
      <Headers />
    <main className="min-h-[80vh]">
    <Outlet/>
    </main>
      <Footer />
    </div>
  );
};

export default Layout;
