import React from 'react';

export function Home() {

    return (
        <div className="fade-in home-container">
            <a href={require('../assets/liv.jpg')} target="_blank">
                <img className="thumbnail" src={require('../assets/liv.jpg')} alt="Profilepicture" />
            </a>
            <p className="Home-p">Hi, my name is Liv Mellema. <br /> Welcome to my website, here's a little impression of me.</p>
        </div>
    );
}
