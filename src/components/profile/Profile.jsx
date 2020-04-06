import React from 'react';
import './Profile.scss';
export default props => {
    return (

        <div className="profile">
            <pan><button type="button">Voltar</button></pan>
            <div className="profile__box-image">
                <span className="profile__box--span">
                    <img className="profile__img" src="../../images/0-1.jpg" alt=""/>
                </span>
            </div>
            <div className="profile_box-name">
                <h2 className="profile_box-name--title">Eduardo Vieira</h2>
                <p className="profile_box-name--description">UI Dessigner</p>
            </div>
            <div className="profile_box-logo-name">
                <div className="profile_logo">
                    <img src="../../images/Group-142.svg" alt=""/>
                </div>
                <div className="profile_phone">
                    <span>31|9.9147 - 8701</span>
                    <span>31|2138 - 2020</span>
                </div>
                <div className="profile_email">
                    eduardo.viana@mudiale.com.br
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
    );
};
