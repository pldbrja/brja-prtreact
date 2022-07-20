import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const hStyles = {
    header: {
        padding: '0 10px 0 10px',
        background: "#3F88C5",
        margin: 0,
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
                <header class="container-fluid">
                    <div>
                        <h1>Mia Borja</h1>
                    </div>

                    <div>
                            <Nav currentPage={currentPage} changePage={changePage} />
                        </div>
                </header>
            </div>
            <div className="container-xxl">
                {renderSite()}
            </div>
        </div>
    );
};

export default Header;