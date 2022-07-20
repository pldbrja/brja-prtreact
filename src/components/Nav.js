import React from 'react';

function Nav({currentPage, changePage}) {
    return (
        <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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