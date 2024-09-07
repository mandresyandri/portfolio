import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import AnimatedCursor from "react-animated-cursor";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App overflow-hidden">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='0, 0, 0'
        outerAlpha={0.2}
        innerScale={1.7}
        outerScale={2}
        trailingSpeed={10}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Navbar/>
      <Header/>
      <About />
      <Footer/>
      <ScrollToTop smooth className="scroll-to-top" />
    </div>
  );
}

export default App;