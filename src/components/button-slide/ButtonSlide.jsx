import React from 'react';
import {Link} from "react-router-dom";
import './ButtonSlide.scss';

export default props => {
    return (
            <div className="button-slide">
                {props.letter
                ?
                    <Link to={`/${props.letter}`} >
                        {props.letter}
                    </Link>
                    :

                    <button
                        type="button"
                        disabled={true}
                        className="button-slide__btn button-slide__btn--off"
                    >

                    </button>
                }
            </div>
    );
};
