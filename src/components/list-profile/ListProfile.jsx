import React from 'react';
import './ListProfile.scss';
import {Link} from "react-router-dom";

export default props => {
    const id = 15;
    return (
        <React.Fragment>
            <div className="list-profile">
                <ul className="list-profile__ul">
                    <li className="list-profile__li">
                        <div className="list-profile__li-box">
                            <span className="list-profile__li--photo">
                                <img src="../../images/0-1.jpg" alt=""/>
                            </span>
                            <span className="list-profile__li--name">
                                <h2 className="list-profile__li--name-h2">Daniel Evangelista</h2>
                                <p className="list-profile__li--name-p">Diretor de inovação</p>
                            </span>
                            <span className="list-profile__li--button">
                                <button type="button" className="list-profile__li--btn">
                                   <Link to={`/profile/${id}`}>+</Link>
                                </button>
                            </span>
                        </div>
                    </li>

                    <li className="list-profile__li list-profile__li--empty">
                        <div className="list-profile__li-box list-profile__li-box--empty">

                        </div>
                    </li>
                </ul>
            </div>
        </React.Fragment>

    );
};
