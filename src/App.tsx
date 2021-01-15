import React from 'react';
import './App.css';
import Header from './header';
import Navigation from './navigation';
import Times from './times';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="header"></div> */}
      <Navigation/>
      {/* <div className="navigation">navigation</div> */}
      {/* <div className="times">Times</div> */}
      <Times/>
      <div className="content">main shit</div>
      {/* <div className="footer">footer</div> */}
      <Footer />
    </div>
  );
}

export default App;
