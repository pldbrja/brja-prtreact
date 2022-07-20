import React from 'react';

const nStyles = {
    nav: {
        '& ul': {
            listStyleType: 'none',
        },

        '& li': {
            display: 'inline-block',
        }
    },
}

function Nav({currentPage, changePage}) {
    return (
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a href="#about" onClick={() => changePage('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li class="nav-item">
                <a href="#portfolio" onClick={() => changePage('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#contact" onClick={() => changePage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
            <li class="nav-item">
                <a href="#resume" onClick={() => changePage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            </li>
        </ul>
    );
};

export default Nav;