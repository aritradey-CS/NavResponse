import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>
          I am an engineering student in the Department of Computer Science, I
          have completed my diploma course in 2019 and Graduation B.tech in
          Computer Science following by 2022 now doing Master's. from my blog,
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
          How It Got Started Content creating and content writing is the job I
          love to do!! I am an avid reader and writer. I have the ability to
          read and analyze content and also love to create digital content.
          Lastly, I worked for "LearnByExample" as a content writer. I have
          completed my diploma engineering course in 2019 in Computer Science
          and Technology. currently, I'm doing B.tech engineering in the same
          department. Joining any organization will help me learn a lot. I'm
          always ready to put my full effort to learn & growing my skills which
          are beneficial for the job. I feel that the company can undoubtedly
          help me build one. In turn, I can assure you of utmost dedication.
          AestheticAritra is truly my own little passion project, gaining more
          and more traction each day. I hope you enjoy browsing my site and all
          of the unique content I have to offer. Take a look around; perhaps
          you’ll discover what fuels you as well. Read on and enjoy!
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
          How It Got Started Content creating and content writing is the job I
          love to do!! I am an avid reader and writer. I have the ability to
          read and analyze content and also love to create digital content.
          Lastly, I worked for "LearnByExample" as a content writer. I have
          completed my diploma engineering course in 2019 in Computer Science
          and Technology. currently, I'm doing B.tech engineering in the same
          department. Joining any organization will help me learn a lot. I'm
          always ready to put my full effort to learn & growing my skills which
          are beneficial for the job. I feel that the company can undoubtedly
          help me build one. In turn, I can assure you of utmost dedication.
          AestheticAritra is truly my own little passion project, gaining more
          and more traction each day. I hope you enjoy browsing my site and all
          of the unique content I have to offer. Take a look around; perhaps
          you’ll discover what fuels you as well. Read on and enjoy!
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
          How It Got Started Content creating and content writing is the job I
          love to do!! I am an avid reader and writer. I have the ability to
          read and analyze content and also love to create digital content.
          Lastly, I worked for "LearnByExample" as a content writer. I have
          completed my diploma engineering course in 2019 in Computer Science
          and Technology. currently, I'm doing B.tech engineering in the same
          department. Joining any organization will help me learn a lot. I'm
          always ready to put my full effort to learn & growing my skills which
          are beneficial for the job. I feel that the company can undoubtedly
          help me build one. In turn, I can assure you of utmost dedication.
          AestheticAritra is truly my own little passion project, gaining more
          and more traction each day. I hope you enjoy browsing my site and all
          of the unique content I have to offer. Take a look around; perhaps
          you’ll discover what fuels you as well. Read on and enjoy!
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
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/page">
          <Pages />
        </Route>
        <Route exact path="/gallary">
          <Gallary />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
