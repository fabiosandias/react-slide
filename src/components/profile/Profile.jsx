import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Utils  from "../../utils/Utils";
import './Profile.scss';
import {useParams} from "react-router";

export default props => {
    const { browserBack } = Utils();
    const back = <FontAwesomeIcon icon={faChevronLeft} />
    const { id } = useParams();
    const { filterById } = Utils();
    const  [ user, setUser ] = useState({});

    useEffect(() => { setUser(filterById(parseInt(id))) }, [id]);

    return (<React.Fragment>
        { Object.keys(user).length !== 0
            ?
                <div className="profile">
                    <div className="slide">
                        <span className="profile__icon" onClick={() => browserBack()}>{back}</span>
                        <div className="profile__box-image">
                    <span className="profile__box--span">
                        <img className="profile__img" src={`../../images/${user.image}`} alt=""/>
                    </span>
                        </div>
                        <div className="profile_box-name">
                            <h2 className="profile_box-name--title">{user.name}</h2>
                            <p className="profile_box-name--description">{user.role}</p>
                        </div>
                        <div className="profile_box-logo-name">
                            <div className="profile_logo">
                                <img src="../../images/Group-142.svg" alt=""/>
                            </div>
                            <div className="profile_phone">
                                <span>{user.phone.mobile.ddd}|{user.phone.mobile.phone}</span>
                                <span>{user.phone.fix.ddd}|{user.phone.fix.phone}</span>
                            </div>
                            <div className="profile_email">
                                {user.email}
                            </div>
                            <div className="profile_divider">
                            </div>
                        </div>

                        <div className="profile__qrcode">
                    <span className="profile__qrcode--span">
                        <img src="../../images/eduardo.png" alt=""/>
                    </span>
                        </div>
                    </div>
                </div>
            :
                ''
        }
    </React.Fragment>);
}
