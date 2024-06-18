import React from 'react';
import cl from "./style.module.css"

const Avatar = () => {
    return (
        <div className={cl.cont}>
            <img src={require('../../assets/avatar.png')} alt="" className={cl.img}/>
        </div>
    );
};

export default Avatar;