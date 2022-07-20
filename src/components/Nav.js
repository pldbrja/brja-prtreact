import React from 'react';

function Nav({currentPage, changePage}) {
    return (
        <div>
            {/* At the moment, the button is broken. On mobile the layout is a bit weird, but will be fixed. */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="navbar">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item nav-hover">
                        <a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <a href="#portfolio" onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <a href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                    <li className="nav-item nav-hover">
                        <a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;