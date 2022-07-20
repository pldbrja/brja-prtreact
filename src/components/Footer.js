import React from 'react';

const fStyle = {
    centering: {
        textAlign: 'center',
        letterSpacing: '10px',
    }
}

function Footer() {
    return (
        <footer style={fStyle.centering}>
                <a href="https://github.com/pldbrja"><i className="fa-custom fa-brands fa-github fa-4x"></i></a>
                <a href="https://www.linkedin.com/in/mia-borja-203abb213/"><i className="fa-custom fa-brands fa-linkedin fa-4x"></i></a>
        </footer>
    );
};

export default Footer;