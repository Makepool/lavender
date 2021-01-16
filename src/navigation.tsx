import { useLocation } from 'react-router-dom';
import './navigation.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export default function Navigation({height, navRef, loc}: any) {
    const pages = [
        {id: 1, path: '/about-the-lavender-room', name: 'About us'},
        {id: 2, path: '/nails', name: 'Nails'},
        {id: 3, path: '/waxing', name: 'Waxing'},
        {id: 4, path: '/spray-tan', name: 'Spray tanning'},
        {id: 5, path: '/acials-and-skincare', name: 'Facials and skincare'},
        {id: 6, path: '/hands-and-feet', name: 'Hands and feet'},
        {id: 7, path: '/make-up', name: 'Make-up'},
        {id: 8, path: '/eye-treatments', name: 'Eye treatments'}
    ];

    let location = useLocation();

    return (
        <nav id="nav-outer" className="navigation" style={{height}}>
            <ul id="nav" ref={navRef}>
                {pages.map((page: any) => (
                    <li key={page.id}>
                        <Link to={page.path} className={cn({active: location.pathname === page.path})}>{page.name}</Link>
                    </li>
                ))}
                {/* <li><a href="/about-the-lavender-room" className="active">About us</a></li>
                <li><a href="/nails.html">Nails</a></li>
                <li><a href="/waxing.html">Waxing</a></li>
                <li><a href="/spray-tan.html">Spray tanning</a></li>
                <li><a href="/facials-and-skincare.html">Facials and skincare</a></li>
                <li><a href="/hands-and-feet.html">Hands and feet</a></li>
                <li><a href="/make-up.html">Make-up</a></li>
                <li><a href="/eye-treatments.html">Eye treatments</a></li> */}
            </ul>
        </nav>
    );
}