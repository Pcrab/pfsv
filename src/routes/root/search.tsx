import { useContext } from "react";
import translate from "../../utils/translate.js";
import { RootContext } from "./index.js";
import "./search.scss";

const Search = () => {
    const rootContext = useContext(RootContext);

    return (
        <div className="search">
            <input
                type="text"
                value={rootContext.searchUrl}
                onChange={(e) => {
                    rootContext.setSearchUrl(e.target.value);
                }}
            />
            <div>{translate("search")}</div>
        </div>
    );
};

export default Search;
