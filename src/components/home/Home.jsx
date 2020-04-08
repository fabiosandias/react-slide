import React, {useEffect, useState} from 'react';
import ListProfile from '../list-profile/ListProfile';
import './Home.scss';
import ListButton from "../list-button/ListButton";
import { useParams } from "react-router-dom";
import { ALPHABET, ARRAY_ALPHABET } from "../../constants/Constants";
import Utils from "../../utils/Utils";

export default props => {
    const { letter } = useParams();

    const [letterActive, setLetterActive] = useState('A');
    const [letterBack, setLetterBack] = useState(null);
    const [letterNext, setLetterNext] = useState('B');
    const { getIndex }  = Utils()

    const setLetter = letter => {
        if (urlIsLetter(letter)) {
            setLetterActive(ALPHABET.A.LETTER);
            setLetterBack(null);
            setLetterNext(ALPHABET.B.LETTER);
            return false;
        }

        const index = getIndex(letter);

        if (letter && letter.toUpperCase() !== ALPHABET.A.LETTER && letter.toUpperCase() !== ALPHABET.Z.LETTER) {
            setLetterActive(ALPHABET[letter.toUpperCase()]['LETTER']);
            setLetterBack(ARRAY_ALPHABET[index - 1].LETTER);
            setLetterNext(ARRAY_ALPHABET[index + 1].LETTER);
            return false;
        }

        if (letter && letter.toUpperCase() === ALPHABET.Z.LETTER) {
            setLetterActive(ALPHABET[letter.toUpperCase()]['LETTER']);
            setLetterBack(ALPHABET.Y.LETTER);
            setLetterNext(ALPHABET.A.LETTER);
        }
        else {
            setLetterActive(ALPHABET.A.LETTER);
            setLetterBack(null);
            setLetterNext(ALPHABET.B.LETTER);
        }
    }

    const urlIsLetter = (letter) => {
        return letter && ARRAY_ALPHABET.every(lt => lt.LETTER !== letter.toUpperCase());
    }

    useEffect(() => {
        setLetter(letter);
    }, [letter]);

    return (
        <>
           <div className="home">
               <div className="home__list-button">
                   <ListButton letter={letterActive} back={letterBack} next={letterNext}/>
               </div>
               <div className="home__profile-list">
                    <ListProfile letterList={letterActive} />
               </div>
           </div>
        </>
    );
};
