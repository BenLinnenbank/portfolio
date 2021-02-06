import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'

const Item = ({ artPiece }) => (
    <SliderContext.Consumer>
        {({ onSelectSlide, currentSlide, elementRef }) => {
            const isActive = currentSlide && currentSlide.id === artPiece.id;

            return (
                <div
                    ref={elementRef}
                    className={cx('item', {
                        'item--open': isActive,
                    })}
                >
                    <img src={artPiece.image} alt="" />
                    <ShowDetailsButton className="show-details-btn" onClick={() => onSelectSlide(artPiece)} />
                    {isActive && <Mark />}
                </div>
            );
        }}
    </SliderContext.Consumer>
);

export default Item;