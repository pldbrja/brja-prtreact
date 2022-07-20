import React, { useState } from 'react';
import TextField from '@mui/material/TextField'

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
            setError('This field cannot be empty.');
            return;
        }

        setEmail('');
        setName('');
        setInquiry('');
    }

    return (
        <div>
            <form>
                <TextField
                id="outlined-basic"
                value={nickName}
                name="nickName"
                onChange={handleInput}
                type="nickName"
                placeholder="Name"/>
                <input 
                className="form-control"
                value={email}
                name="email"
                onChange={handleInput}
                type="email"
                placeholder="Email"/>
                <textarea
                className="form-control"
                value={inquiry}
                name="inquiry"
                onChange={handleInput}
                type="inquiry"
                placeholder="Enter your message"/>

                <button className="btn" type="button" onClick={handleFormSubmit}>Send Your Inquiry</button>
            </form>
            {error && (
                <div>
                    <p className="error-message">! {error}</p>
                </div>
            )}
        </div>
    );
}