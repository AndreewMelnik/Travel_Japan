import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="wrapper">
            <div className="header__wrapper">
                <div className="header__logo">
                    <a className="header__logo-link" href="/">
                        <img className="header__logo-img" src="./img/svg/odigo-Logo.svg" alt="Discover Amazing places in Japan" />
                    </a>
                </div>

                <nav className="navbar">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link" href="#articles">Articles</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#locations">Locations</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#videos">Videos</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link" href="#signin">Sign in</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

  );
}

export default Header;
