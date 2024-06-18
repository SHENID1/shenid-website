import React from 'react';
import cl from "./style.module.css"
import ProjectInfo from "./ProjectInfo/ProjectInfo";

const OtherTemplate = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.info}>
                    17 y.o.<br/>
                    Frontend developer
                </div>
                <br/>
                <ProjectInfo/>
            </div>
        </div>
    );
};

export default OtherTemplate;