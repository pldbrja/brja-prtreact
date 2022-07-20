import React from 'react';
import ContactForm from './ContactForm';

const styles = {
    Test: {
        opacity: 0,
    }
}

export default function Contact () {
    return (
        <div className="render container-xxl">
            <h2>Contact Me</h2>
            <ContactForm />
        </div>
    );
};