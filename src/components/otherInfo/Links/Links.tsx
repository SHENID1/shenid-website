import React, {FC} from 'react';
import {DiscordFilled, GithubFilled} from "@ant-design/icons";
import cl from "./style.module.css";
import {GitHubLink, SHENID1Name, SHENIDName, TelegramName} from "../../../constans/links";
import {message} from "antd";

const Links: FC = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = (text: string) => {
        messageApi.open({
            type: 'success',
            content: `"${text}" Скопировано в буфер обмена!`,
        }).then();
    };



    const unsecuredCopyToClipboard = (text: string) => { const textArea = document.createElement("textarea"); textArea.value=text; document.body.appendChild(textArea); textArea.focus();textArea.select(); try{document.execCommand('copy')}catch(err){console.error('Unable to copy to clipboard',err)}document.body.removeChild(textArea)};

    const CopyText = (content: string) => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(content).then(function () {
                success(content);
            });
        } else {
            unsecuredCopyToClipboard(content)
            success(content);
        }
    };


    return (
        <div className={cl.container}>
            {contextHolder}
            <a href={GitHubLink} target={"_blank"} rel="noreferrer">
                <div className={cl.white}>
                    <GithubFilled className={cl.ico} title={SHENID1Name}/>
                </div>
            </a>
            <div className={cl.white} onClick={() => CopyText(SHENIDName)}>
            <DiscordFilled className={cl.ico}  title={SHENIDName}/>
            </div>
            <div className={cl.white} onClick={() => CopyText(TelegramName)}>
            <img className={cl.ico} title={TelegramName} src={require("../../../assets/Telegram.jpg")} alt=""
                 />
            </div>
        </div>
    );
};

export default Links;