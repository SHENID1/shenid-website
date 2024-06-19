import React from 'react';
import cl from "./style.module.css"
import Links from "./Links/Links";
import ProjectInfo from "./ProjectInfo/ProjectInfo";


const OtherTemplate = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <div className={cl.info}>
                    17 y.o.<br/>
                    Frontend developer
                </div>
                {/*<br/>*/}
                <ProjectInfo/>
                <Links/>
            </div>
        </div>
    );
};

export default OtherTemplate;