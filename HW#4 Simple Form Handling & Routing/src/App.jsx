import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex min-h-svh w-full flex-col justify-between gap-4">
      <Navbar />
      <main className="px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;