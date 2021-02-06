import React from 'react';
import liv from '../assets/liv.jpg';
import { Row, Col } from 'reactstrap';

export function Home() {

    return (

        <Row>
            <Col xs="3" className="transparant-div" />
            <Col xs="6">

                <div className="fade-in home-container">
                    <a href={liv} target="_blank">
                        <img className="thumbnail" src={liv} alt="Profilepicture" />
                    </a>
                    <p className="Home-p">Hi, my name is Liv Mellema. <br /> Welcome to my website, here's a little impression of me.</p>
                </div>

            </Col>
        </Row>
    );
}
