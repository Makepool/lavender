import React, { useRef, useState } from 'react';
import './App.css';
import Header from './header';
import Navigation from './navigation';
import Times from './times';
import Footer from './footer';

function App() {
  let [height, setHeight] = useState('0');
  const navRef = useRef(null);

  return (
    <div className="App">
      <Header height={height} setHeight={setHeight} navRef={navRef} />
      <Navigation height={height} navRef={navRef} />
      <div className="content">main shit</div>
      <Times/>
      <Footer />
    </div>
  );
}

export default App;
