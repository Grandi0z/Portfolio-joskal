import React from 'react';
import Home from './Home/Home';
import Technologies from './Technologies/Technologies';
import Works from './Works/Works';
import About from './About/About';

const MainPage = () => (
  <div className="flex flex-col main-container">
    <div className="bg-blue-500/20">
      <Home />
      <div id="technologies"><Technologies /></div>
      <div id="works"><Works /></div>
      <div id="about"><About /></div>
    </div>
  </div>
);

export default MainPage;
