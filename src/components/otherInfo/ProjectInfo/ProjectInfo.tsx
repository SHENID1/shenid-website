import React from 'react';
import cl from "./style.module.css"

const ProjectInfo = () => {
    return (
        <>
            <div className={cl.header}>
                Мои проекты:
            </div>
            <a href={"https://interactive-school-map.ru/"} target={"_blank"} rel="noreferrer">
                <div className={cl.pr}>
                    <img src={require("../../../assets/interactive-school-map-logo.png")} alt=""
                         className={cl.img}/>
                    <div className={cl.prName}>Интерактивная карта школы</div>
                </div>
            </a>

        </>

    );
};

export default ProjectInfo;