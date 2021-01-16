import './navigation.scss';

export default function Navigation({height, navRef}: any) {
    return (
        <nav id="nav-outer" className="navigation" style={{height}}>
            <ul id="nav" ref={navRef}>
                <li><a href="/about-the-lavender-room.html" className="active">About us</a></li>
                <li><a href="/nails.html">Nails</a></li>
                <li><a href="/waxing.html">Waxing</a></li>
                <li><a href="/spray-tan.html">Spray tanning</a></li>
                <li><a href="/facials-and-skincare.html">Facials and skincare</a></li>
                <li><a href="/hands-and-feet.html">Hands and feet</a></li>
                <li><a href="/make-up.html">Make-up</a></li>
                <li><a href="/eye-treatments.html">Eye treatments</a></li>
            </ul>
        </nav>
    );
}