import React from 'react';

function Nav({currentPage, changePage}) {
    return (
        <div>
            <li>
                <a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li>
                <a href="#portfolio" onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li>
                <a href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li>
                <a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </div>
    );
};

export default Nav;