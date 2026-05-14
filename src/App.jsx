import React, { useState } from "react";
import "./App.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/Statsbar";
import About from "./components/About";
import Programs from "./components/Programs";
import FounderSection from "./components/FounderSection";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import DonateModal from './components/DonateModel'

import DonateIcon from "./components/Icon";

const App = () => {
  const [showDonate, setShowDonate] = useState(false);

  const openDonateModal = () => {
    setShowDonate(true);
  };

  const closeDonateModal = () => {
    setShowDonate(false);
  };

  return (
    <div>
      <TopBar />

     
      <Navbar onDonate={openDonateModal} />

        <Hero/>

      <StatsBar />

      <About onDonate={openDonateModal}  />

      <Programs />

      <FounderSection />

      <Achievements />

      <Testimonials />

  
      <CtaBanner onDonate={openDonateModal} />

      <Contact />

      <Footer onDonate={openDonateModal}  />

    
      {showDonate && (
        <DonateModal onClose={closeDonateModal} />
      )}

      <DonateIcon onDonate={openDonateModal} />
     
    </div>
   

  );
};

export default App;