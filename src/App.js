import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Futered from "./components/Futered";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Futered />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
