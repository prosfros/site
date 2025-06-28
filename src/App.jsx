import React from "react";
import Header from "./components/Header";
import Footer from "./components/licence";
import Hero from "./components/Sections/Hero";
import Help from "./components/Sections/Help";


function App() {
  return (
    <div className="w-full bg-white to-indigo-800 text-white overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Hero />
        <Help/>
      </main>
      <Footer />
    </div>
  );
}

export default App;