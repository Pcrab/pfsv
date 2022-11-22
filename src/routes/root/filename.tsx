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
                value={rootContext.filename.value}
                onChange={(e) => {
                    rootContext.filename.set(e.target.value);
                }}
            />
        </div>
    );
};

export default Filename;
