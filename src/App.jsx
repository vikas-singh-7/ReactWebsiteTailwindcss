import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedProjects from "./components/FeaturedProjects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-h-screen w-full text-white bg-zinc-900 ">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes
        image={
          "https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
        }
      />
      <FeaturedProjects />
      <Cards />
      <Eyes
        image={
          "https://images.pexels.com/photos/3280211/pexels-photo-3280211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />

      <Footer />
    </div>
  );
};

export default App;
