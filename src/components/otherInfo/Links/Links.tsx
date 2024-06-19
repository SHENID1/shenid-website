import React, {FC} from 'react';
import {DiscordFilled, GithubFilled} from "@ant-design/icons";
import cl from "./style.module.css";
import {
    BattleNetName,
    GitHubLink,
    InteractiveSchoolMap,
    SHENID1Name,
    SHENIDCapsName,
    SHENIDName, SteamLink, TelegramName
} from "../../../constans/links";
import {message} from "antd";
import BattleNetLogo from "../../../assets/brand-battlenet.svg";

const Links: FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = (text: string) => {
        messageApi.open({
            type: 'success',
            content: `"${text}" Скопировано в буфер обмена!`,
        }).then();
    };

    function CopyText(name: string): void {
        navigator.clipboard.writeText(name).then(function () {
            success(name);
        });
    }

    return (
        <div className={cl.container}>
            {contextHolder}
            <a href={GitHubLink} target={"_blank"} rel="noreferrer">
                <GithubFilled className={cl.ico} title={SHENID1Name}/>
            </a>

            <DiscordFilled className={cl.ico} onClick={() => CopyText(SHENIDName)} title={SHENIDName}/>
            <a href={InteractiveSchoolMap} target={"_blank"} rel="noreferrer">
                <img src={require("../../../assets/interactive-school-map-logo.png")} alt="" className={cl.ico}
                     title="Интерактивная карта школы"/>
            </a>
            <img className={cl.ico} title={BattleNetName} src={BattleNetLogo} alt=""
                 onClick={() => CopyText(BattleNetName)}/>
            <a href={SteamLink} target={"_blank"} rel="noreferrer">
                <img src={require("../../../assets/Steam-Logo.png")} alt="" className={cl.ico} title={SHENIDCapsName}/>
            </a>
            <img className={cl.ico} title={TelegramName} src={require("../../../assets/Telegram.jpg")} alt=""
                 onClick={() => CopyText(TelegramName)}/>
            <img className={cl.epicg} title={SHENID1Name} src={require("../../../assets/EpicGames.png")} alt="" id="epicg"
                 onClick={() => CopyText(SHENID1Name)}/>
        </div>
    );
};

export default Links;