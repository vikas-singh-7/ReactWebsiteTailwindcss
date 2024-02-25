import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div className="h-screen w-full text-white">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default App;
