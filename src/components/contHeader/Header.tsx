import React from 'react';
import Avatar from "../../components/avatar/Avatar";
import AnimatedLogo from "../../components/Logo/AnimatedLogo";
import cl from "./style.module.css"

const Header = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.cont}>
                <Avatar/>
                <AnimatedLogo/>

            </div>
        </div>
    );
};

export default Header;