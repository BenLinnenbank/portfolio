import React from 'react';
import './ShowDetailsButton.scss'
import IconArrowDown from '../Icons/IconArrowDown';

const ShowDetailsButton = ({ onClick }) => (
    <button onClick={onClick} className="show-details-button">
        <span>
            <IconArrowDown />
            <br></br><br></br><br></br>
        </span>
    </button>
);

export default ShowDetailsButton;