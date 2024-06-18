import React from 'react';
import cl from "./style.module.css"

const Video = () => {
    return (
        <div className={cl.background}>
            <video autoPlay={true} muted={true} loop={true} preload="auto" className={cl.video}>
                <source src={require("../../assets/videoplayback.mp4")} type="video/mp4"/>
            </video>
        </div>

    );
};

export default Video;