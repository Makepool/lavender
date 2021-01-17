import { useLocation } from 'react-router-dom';
import './navigation.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface Page {
    id: number;
    path: string;
    name: string;
}

interface Props {
    height: string;
    navRef: React.MutableRefObject<any>;
}

export default function Navigation({height, navRef}: Props) {
    const pages: Page[] = [
        {id: 1, path: '/', name: 'About us'},
        {id: 2, path: '/nails', name: 'Nails'},
        {id: 3, path: '/waxing', name: 'Waxing'},
        {id: 4, path: '/spray-tan', name: 'Spray tanning'},
        {id: 5, path: '/acials-and-skincare', name: 'Facials and skincare'},
        {id: 6, path: '/hands-and-feet', name: 'Hands and feet'}
    ];

    let location = useLocation();

    return (
        <nav id="nav-outer" className="navigation" style={{height}}>
            <ul id="nav" ref={navRef}>
                {pages.map((page: Page) => (
                    <li key={page.id}>
                        <Link to={page.path} className={cn({active: location.pathname === page.path})}>{page.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}