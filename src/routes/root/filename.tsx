import { useContext } from "react";
import translate from "../../utils/translate.js";
import "./filename.scss";
import { RootContext } from "./index.js";

const Filename = () => {
    const rootContext = useContext(RootContext);

    return (
        <div className="filename">
            <div>{translate("filename")}</div>
            <input
                type="text"
                value={rootContext.filename}
                onChange={(e) => {
                    rootContext.setFilename(e.target.value);
                }}
            />
            <div>{translate("confirm")}</div>
        </div>
    );
};

export default Filename;
