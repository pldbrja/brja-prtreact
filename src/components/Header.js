import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const hStyles = {
    header: {
        padding: '0 10px 0 10px',
        background: 'linear-gradient(180deg, rgba(19,111,99,1) 57%, rgba(3,43,67,1) 58%, rgba(19,111,99,1) 59%, rgba(19,111,99,1) 62%, rgba(3,43,67,1) 63%)',
        margin: 0,
        boxShadow: 'inset #D00000 0 6px 0, inset #D00000 0 -2px 0'
    },
    heading: {
        padding: '0 10px 0 10px',
    }
}

function Header() {
    const [currentPage, portfolioPage] = useState('About');

    const renderSite = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    }
    
    const changePage = (page) => portfolioPage(page);
    

    return (
        <div>
            <div style={hStyles.header} className="navbar navbar-expand-lg">
                <header className="container-fluid">
                    <div style={hStyles.heading}>
                        <h1 className="display-2">Mia Borja</h1>
                    </div>
                    
                    <Nav currentPage={currentPage} changePage={changePage} />
                </header>
            </div>
                {renderSite()}
        </div>
    );
};

export default Header;