import Header from './header';
import Navigation from './navigation';
import Times from './times';
import Footer from './footer';
import { useRef, useState } from 'react';
import './page-container.scss';

interface Props {
  children: JSX.Element;
  hero: JSX.Element;
}

export default function PageContainer({children, hero}: Props) {
  let [height, setHeight] = useState('0');
  const navRef = useRef(null);

  return (
    <div className="page-container">
      <Header height={height} setHeight={setHeight} navRef={navRef} />
      <Navigation height={height} navRef={navRef} />
      <div className="content">
        <div className="main-section">
          <div className="hero">
            {hero}
          </div>
          <div className="description">
            {children}
          </div>
        </div>
      </div>
      <Times/>
      <Footer/>
    </div>
  );
}