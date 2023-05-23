import React from "react";
import Navbar from "./components/Navbar";
// import Home from "./Home";
// import Pages from "./Pages";
// import Gallary from "./Gallary";
// import About from "./About";


import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
          I am an engineering student from my blog,
          you can get informations for digital technologies which are may
          included in your course or beyond!
        </p>
        <h1>Aritra's Diary Home Page</h1>
      </section>
    </>
  );
};

const Pages = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem similique possimus, odit culpa, ipsum earum sunt velit aliquid qui magnam! Vel, cupiditate provident.
        </p>
        <h1>Aritra's Diary About Page</h1>
      </section>
    </>
  );
};

const Gallary = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloremque ullam illum ex saepe enim sequi tenetur possimus hic qui!
        </p>
        <h1>Aritra's Diary Gallary Page</h1>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto vitae impedit?
        </p>
        <h1>Aritra's Diary About Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/page" element={<Pages />} />
        <Route exact path="/gallary" element={<Gallary />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
