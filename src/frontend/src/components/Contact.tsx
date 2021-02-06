import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

export function Contact() {

    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <Row className="header-row">
            <Col xs="3" className="transparant-div" />
            <Col xs="6">
                <div className="fade-in">
                    <form onSubmit={handleSubmit}>
                        <ul className="form-style-1">
                            <li>
                                <label>Full Name <span className="required">*</span></label>
                                <input type="text" value={name} onChange={e => setName(e.target.value)} name="field1" className="field-divided" placeholder="First" />
                                <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} name="field2" className="field-divided" placeholder="Last" />
                            </li>
                            <li>
                                <label>Email <span className="required">*</span></label>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="field3" className="field-long" />
                            </li>
                            <li>
                                <label>Your Message <span className="required">*</span></label>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} name="field5" id="field5" className="field-long field-textarea"></textarea>
                            </li>
                            <li>
                                <input type="submit" value="Submit" />
                            </li>
                        </ul>
                    </form>
                </div>
            </Col>
        </Row>
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
                name,
                lastName,
                email,
                message,
            }),
        });
    }
}


