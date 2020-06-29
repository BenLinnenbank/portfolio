import React from 'react';
import './Animation.css';

function Animation() {
    const hotbod = document.querySelector("body");

    function doStuff() {
        hotbod.className += " animate";
    }

    window.onload = function() {
        doStuff();
    };

    return (
        <div className="unbreakable-container">  
            <div className="unbreakable">
                <span className="un">MY</span><span className="break">PORT</span><span className="able">FOLIO</span>
            </div>
            <div className="ks">Liv Mellema</div>
        </div>
    );
}

export default Animation;