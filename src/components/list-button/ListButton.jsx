import React, {useEffect, useState} from 'react';
import './ListButton.scss';
import ButtonSlide from "../button-slide/ButtonSlide";
import {useParams} from "react-router-dom";

export default props => {
    const [keyFrame, setKeyFrame] = useState(false);
    const [letterActive, setLetterActive] = useState(props.letter)
    const { letter } = useParams();

    const showSlide = () => {
        setKeyFrame(true);
        setTimeout(() => {
            setKeyFrame(false);
        }, 1000);
    }

    useEffect((event) => {
        showSlide()
    }, [letterActive, letter])
    return (
            <div className="list-button">
                <div className={`list-button__slide ${keyFrame ? "list-button__slide--active" : ''}`}>
                    <div className="list-button__first">
                        <ButtonSlide letter={props.back}></ButtonSlide>
                    </div>
                    <div className="list-button__selected">
                        {props.letter}
                    </div>
                    <div className="list-button__last">
                        <ButtonSlide letter={props.next}></ButtonSlide>
                    </div>
                </div>
            </div>
    );
};
