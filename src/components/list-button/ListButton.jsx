import React from 'react';
import './ListButton.scss';
import ButtonSlide from "../button-slide/ButtonSlide";

export default props => {
    return (
            <div className="list-button">
                <div className="list-button__first">
                    <ButtonSlide letter="B" nextLetter={() => {}}></ButtonSlide>
                </div>
                <div className="list-button__selected">
                    {props.latter}
                </div>
                <div className="list-button__last">
                    <ButtonSlide letter="C" nextLetter={() => {}}></ButtonSlide>
                </div>
            </div>
    );
};
