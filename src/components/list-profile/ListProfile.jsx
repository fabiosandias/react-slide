import React, {useEffect, useState} from 'react';
import './ListProfile.scss';
import {Link, useParams} from "react-router-dom";
import Utils from "../../utils/Utils";
import {ARRAY_ALPHABET} from "../../constants/Constants";

export default props => {
    const [keyFrame, setKeyFrame] = useState(false);
    const { letter } = useParams();
    const [ users, setUsers ] = useState([]);
    const [ defaultLetter, setDefaultLetter ] = useState('A')
    const { filterByLetter } = Utils();
    const [ numberEmptyCard, setNumberEmptyCard ] = useState(Array.from({length: 5}, (v, k) => k));

    const showSlide = () => {
        setKeyFrame(true);
        setTimeout(() => {
            setKeyFrame(false);
        }, 1000);
    }

    const verifyEmptyCard = (dataUsers) => {
        if (dataUsers.length === 0) {
            setNumberEmptyCard(Array.from({length: 5}))
        }

        if (dataUsers.length > 5) {
            setNumberEmptyCard(Array.from({length: 0}))
        }

        if (dataUsers.length > 0 && dataUsers.length <= 5) {
            setNumberEmptyCard(Array.from({length: 5 - dataUsers.length}))
        }
    }

    useEffect(() => {
        if (!letter || letter && ARRAY_ALPHABET.every(lt => lt.LETTER !== letter.toUpperCase())) {
            showSlide();
            setUsers(filterByLetter(defaultLetter));
            verifyEmptyCard(filterByLetter(defaultLetter));
        } else  {
            showSlide();
            verifyEmptyCard(filterByLetter(letter));
            setUsers(filterByLetter(letter));
        }
    }, [letter]);

    return (
        <React.Fragment>
            <div className={`list-profile ${keyFrame ? "list-profile__slide--active" : ''}`}>
                <ul className="list-profile__ul">
                    {users.map(user =>
                        <li key={user.id} className="list-profile__li">
                            <div className="list-profile__li-box list-profile__shadow">
                            <span className="list-profile__li--photo">
                                <img src={`../../images/${user.image}`} alt=""/>
                            </span>
                                <span className="list-profile__li--name">
                                <h2 className="list-profile__li--name-h2">{user.name}</h2>
                                <p className="list-profile__li--name-p">{user.role}</p>
                            </span>
                                <span className="list-profile__li--button">
                                <button type="button" className="list-profile__li--btn">
                                   <Link to={`/profile/${user.id}`}>+</Link>
                                </button>
                            </span>
                            </div>
                        </li>
                    )}

                    {numberEmptyCard.map((num, index) =>
                        <li key={index} className="list-profile__li list-profile__li--empty">
                            <div className="list-profile__li-box list-profile__li-box--empty">

                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </React.Fragment>

    );
};
