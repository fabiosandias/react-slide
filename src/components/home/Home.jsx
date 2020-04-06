import React, {useEffect, useState} from 'react';
import ListProfile from '../list-profile/ListProfile';
import './Home.scss';
import ListButton from "../list-button/ListButton";
import { useParams } from "react-router-dom";

export default props => {
    debugger;
    const { letter } = useParams();

    const [latterActive, setLatterActive] = useState('A');

    const alphabet = {
        A: {LETTER: 'A', IS_ACTIVE: true},
        B: {LETTER: 'B', IS_ACTIVE: false},
        C: {LETTER: 'C', IS_ACTIVE: false},
        D: {LETTER: 'D', IS_ACTIVE: false},
        E: {LETTER: 'E', IS_ACTIVE: false},
        F: {LETTER: 'F', IS_ACTIVE: false},
        G: {LETTER: 'G', IS_ACTIVE: false},
        H: {LETTER: 'H', IS_ACTIVE: false},
        I: {LETTER: 'I', IS_ACTIVE: false},
        J: {LETTER: 'J', IS_ACTIVE: false},
        K: {LETTER: 'K', IS_ACTIVE: false},
        L: {LETTER: 'L', IS_ACTIVE: false},
        M: {LETTER: 'M', IS_ACTIVE: false},
        N: {LETTER: 'N', IS_ACTIVE: false},
        O: {LETTER: 'O', IS_ACTIVE: false},
        P: {LETTER: 'P', IS_ACTIVE: false},
        Q: {LETTER: 'Q', IS_ACTIVE: false},
        R: {LETTER: 'R', IS_ACTIVE: false},
        S: {LETTER: 'S', IS_ACTIVE: false},
        T: {LETTER: 'T', IS_ACTIVE: false},
        U: {LETTER: 'U', IS_ACTIVE: false},
        V: {LETTER: 'V', IS_ACTIVE: false},
        W: {LETTER: 'W', IS_ACTIVE: false},
        X: {LETTER: 'X', IS_ACTIVE: false},
        Y: {LETTER: 'Z', IS_ACTIVE: false},
        Z: {LETTER: 'Z', IS_ACTIVE: false},
    };

    const setLetter = letter => {
        if (letter) {
            setLatterActive(alphabet[letter.toUpperCase()]['LETTER'])
        }
    }
    useEffect(() => {
        setLetter(letter);
    }, [letter, alphabet]);

    return (
        <>
           <div className="home">
               <div className="home__list-button">
                   <ListButton latter={latterActive}/>
               </div>
               <div className="home__profile-list">
                    <ListProfile letterList={} />
               </div>
           </div>
        </>
    );
};
