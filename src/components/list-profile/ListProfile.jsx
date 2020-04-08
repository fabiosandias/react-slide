import React, {useEffect, useState} from 'react';
import './ListProfile.scss';
import {Link, useParams} from "react-router-dom";
import Utils from "../../utils/Utils";

export default props => {
    const [keyFrame, setKeyFrame] = useState(false);
    const { letter } = useParams();
    const [ users, setUsers ] = useState([]);
    const [ defaultLetter, setDefaultLetter ] = useState('A')
    const { filterByLetter } = Utils();

    const showSlide = () => {
        setKeyFrame(true);
        setTimeout(() => {
            setKeyFrame(false);
        }, 1000);
    }

    useEffect(() => {
        if (!letter) {
            showSlide();
            setUsers(filterByLetter(defaultLetter));
        } else  {
            showSlide();
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

                    <li className="list-profile__li list-profile__li--empty">
                        <div className="list-profile__li-box list-profile__li-box--empty">

                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>

    );
};
