import React from 'react';
import Slider from './Slider/NetflixSlider';
import { artArray } from './Slider/artArray'

export function Gallery() {

    return (
        <div className="slider-container">
            <Slider>
                {artArray.map(artPiece => (
                    <Slider.Item artPiece={artPiece} key={artPiece.id}>{artPiece.title}</Slider.Item>
                ))}
            </Slider>
        </div>
    );
}
