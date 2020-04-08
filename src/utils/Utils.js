import { ARRAY_ALPHABET, USERS } from "../constants/Constants";

const Utils = () => {
    const getIndex = (letterActive) => {
        return ARRAY_ALPHABET.map(letter => letter.LETTER).indexOf(letterActive ? letterActive.toUpperCase() : 'A')
    }

    const  filterByLetter = letter => {
        return USERS.filter(user => user.name.substr(0, 1).toUpperCase() === letter.toUpperCase());
    }

    const filterById = id => {
        return USERS.find(user => user.id === id);
    }

    const browserBack = () => {
        window.history.back();
    }

    return { getIndex, filterByLetter, browserBack, filterById }
}

export default Utils;

