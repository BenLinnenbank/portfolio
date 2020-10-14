import React, { useState } from 'react';

export function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="fade-in">
            <p className="contact-p">Contact</p>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Message:
                    <input
                        type="text"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

    async function handleSubmit(e: any) {
        e.preventDefault();

        alert('Your message has been sent!');

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                message: message,
            }),
        });
    }
}
