import './header.scss';
import { Link } from 'react-router-dom';

interface Props {
    height: string;
    setHeight: Function;
    navRef: React.MutableRefObject<any>;
}

export default function Header({height, setHeight, navRef}: Props) {
    function toggleNavigation() {
        const heightString = height === '0' ? `${navRef.current.offsetHeight}px` : '0';
        setHeight(heightString);
    }

    return (
        <header className="header">
            <div className="top-bar">
                <div className="lavender-text">
                    <h1><Link to="/">The Lavender Room Beauty Salon</Link></h1>
                </div>
                <button type="button" id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation" onClick={toggleNavigation}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        </header>
    )
}