import Header from '../header';
import Navigation from '../navigation';
import Times from '../times';
import Footer from '../footer';
import { useRef, useState } from 'react';
import './page-container.scss';

export default function PageContainer({children}: any) {
  let [height, setHeight] = useState('0');
  const navRef = useRef(null);

  return (
    <div className="page-container">
      <Header height={height} setHeight={setHeight} navRef={navRef} />
      <Navigation height={height} navRef={navRef} />
      <div className="content">
        {children}
      </div>
      <Times/>
      <Footer/>
    </div>
  );
}