import React from 'react';
import './ListProfile.scss';

export default props => {
    return (
        <React.Fragment>
            <div className="list-profile">
                <ul className="list-profile__ul">
                    <li className="list-profile__li">
                        <span className="list-profile__li--photo">
                            <img src="../../images/0-1.jpg" alt=""/>
                        </span>
                        <span className="list-profile__li--name">
                            <h2 className="list-profile__li--name-h2">Daniel Evangelista</h2>
                            <p className="list-profile__li--name-p">Diretor de inovação</p>
                        </span>
                        <span className="list-profile__li--button">
                            <button type="button" className="list-profile__li--btn">+</button>
                        </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>

    );
};
