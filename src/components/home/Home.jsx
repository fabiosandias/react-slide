import React, {useEffect, useState} from 'react';
import ListProfile from '../list-profile/ListProfile';
import './Home.scss';
import ListButton from "../list-button/ListButton";
import { useParams } from "react-router-dom";

export default props => {
    const { letter } = useParams();

    const [letterActive, setLetterActive] = useState('A');
    const [letterBack, setLetterBack] = useState(null);
    const [letterNext, setLetterNext] = useState('B');

    const ALPHABET = {
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
        Y: {LETTER: 'Y', IS_ACTIVE: false},
        Z: {LETTER: 'Z', IS_ACTIVE: false},
    };

    const arrayAlphabet = [
        {LETTER: 'A', IS_ACTIVE: true},
        {LETTER: 'B', IS_ACTIVE: false},
        {LETTER: 'C', IS_ACTIVE: false},
        {LETTER: 'D', IS_ACTIVE: false},
        {LETTER: 'E', IS_ACTIVE: false},
        {LETTER: 'F', IS_ACTIVE: false},
        {LETTER: 'G', IS_ACTIVE: false},
        {LETTER: 'H', IS_ACTIVE: false},
        {LETTER: 'I', IS_ACTIVE: false},
        {LETTER: 'J', IS_ACTIVE: false},
        {LETTER: 'K', IS_ACTIVE: false},
        {LETTER: 'L', IS_ACTIVE: false},
        {LETTER: 'M', IS_ACTIVE: false},
        {LETTER: 'N', IS_ACTIVE: false},
        {LETTER: 'O', IS_ACTIVE: false},
        {LETTER: 'P', IS_ACTIVE: false},
        {LETTER: 'Q', IS_ACTIVE: false},
        {LETTER: 'R', IS_ACTIVE: false},
        {LETTER: 'S', IS_ACTIVE: false},
        {LETTER: 'T', IS_ACTIVE: false},
        {LETTER: 'U', IS_ACTIVE: false},
        {LETTER: 'V', IS_ACTIVE: false},
        {LETTER: 'W', IS_ACTIVE: false},
        {LETTER: 'X', IS_ACTIVE: false},
        {LETTER: 'Y', IS_ACTIVE: false},
        {LETTER: 'Z', IS_ACTIVE: false},
    ]

    const setLetter = letter => {
        const index = getIndex(letter);

        if (letter && letter !== 'A' && letter !== 'Z') {
            setLetterActive(ALPHABET[letter.toUpperCase()]['LETTER']);
            setLetterBack(arrayAlphabet[index - 1].LETTER);
            setLetterNext(arrayAlphabet[index + 1].LETTER);
            return false;
        }

        if (letter && letter === 'Z') {
            setLetterActive(ALPHABET[letter.toUpperCase()]['LETTER']);
            setLetterBack('Y');
            setLetterNext('A');
        }
        else {
            setLetterActive(ALPHABET.A.LETTER);
            setLetterBack(null);
            setLetterNext(ALPHABET.B.LETTER);
        }
    }

    const getIndex = (letterActive) => {
        return arrayAlphabet.map(letter => letter.LETTER).indexOf(letterActive ? letterActive.toUpperCase() : 'A')
    }

    useEffect(() => {
        setLetter(letter);
    }, [letter, ALPHABET]);

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
