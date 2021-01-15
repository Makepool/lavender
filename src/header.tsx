import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="top-bar">
                <div className="lavender-text">
                    <h1><a href="/">The Lavender Room Beauty Salon</a></h1>
                </div>
                <button type="button" id="nav-toggle" className="nav-toggle" aria-label="Toggle navigation">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
        </header>
    )
}