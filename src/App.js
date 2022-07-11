import logo from './logo.svg';
import './App.css';
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />

      </main>
    </div>
  );
}

export default App;
