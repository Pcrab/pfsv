import translate from "../../utils/translate.js";
import "./filename.scss";

const Filename = () => {
    return (
        <div className="filename">
            <div>{translate("filename")}</div>
            <input type="text" />
            <div>{translate("confirm")}</div>
        </div>
    );
};

export default Filename;
