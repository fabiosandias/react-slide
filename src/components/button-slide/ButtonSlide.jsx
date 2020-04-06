import React from 'react';
import './ButtonSlide.scss';

export default props => {
    return (
            <div className="button-slide">
                <button
                    type="button" onClick={(event) => props.nextLetter(event)}
                    className="button-slide__btn"
                >
                    {props.letter}
                </button>
            </div>
    );
};
