import React from 'react';

function Nav({currentPage, changePage}) {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio" onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;