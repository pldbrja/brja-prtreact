import React, { useState } from 'react';
import Alert from '@mui/material/Alert'

import validation from '../../utils/helper';

export default function Form() {
    const [email, setEmail] = useState('');
    const [nickName, setName] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [error, setError] = useState('');

    const handleInput = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
        setEmail(inputValue);
        } else if (inputType === 'nickName') {
        setName(inputValue);
        } else {
        setInquiry(inputValue);
    }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validation(email)) {
            setError('Please use a real email.');
            return;
        }
        if(!nickName) {
            setError('Please enter a name.');
            return;
        }
        if(!inquiry) {
            setError('Please enter a message.');
            return;
        }

        setEmail('');
        setName('');
        setInquiry('');
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="nickName" className="form-label">Name</label>
                    <input 
                    className="form-control"
                    value={nickName}
                    name="nickName"
                    onChange={handleInput}
                    type="nickName"
                    placeholder="Name"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input 
                    className="form-control"
                    value={email}
                    name="email"
                    onChange={handleInput}
                    type="email"
                    placeholder="Email"/>
                </div>
                <div className="mb-3">
                    <label for="inquiry" className="form-label">Message</label>
                    <textarea
                    className="form-control"
                    value={inquiry}
                    name="inquiry"
                    onChange={handleInput}
                    type="inquiry"
                    placeholder="Enter your message"/>
                </div>

                <button className="btn" type="button" onClick={handleFormSubmit}>Send Your Inquiry</button>
            </form>
            {error && (
                <div>
                    <Alert variant="filled" className="error-message" severity="error">{error}</Alert>
                </div>
            )}
        </div>
    );
}