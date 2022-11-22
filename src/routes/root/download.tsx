import { open } from "@tauri-apps/api/shell";
import { Gateways } from "utils/constants.js";
import translate from "utils/translate.js";
import "./download.scss";

const Icon = (props: { desc: string; url: string }) => {
    return (
        <div
            className="icon"
            onClick={() => {
                void open(props.url);
            }}
        >
            {props.desc}
        </div>
    );
};

const Download = () => {
    return (
        <div className="download">
            <div className="icons">
                {Object.entries(Gateways).map(([key, value]) => {
                    return <Icon desc={key} url={value} />;
                })}
            </div>
            <div className="confirm">{translate("confirm")}</div>
        </div>
    );
};

export default Download;
