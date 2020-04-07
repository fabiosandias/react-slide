import {ARRAY_ALPHABET} from "../constants/Constants";

const getIndex = (letterActive) => {
    return ARRAY_ALPHABET.map(letter => letter.LETTER).indexOf(letterActive ? letterActive.toUpperCase() : 'A')
}

export { getIndex };

