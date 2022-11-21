import { useState } from "react";
import translate from "../../utils/translate.js";
import "./search.scss";

const Search = () => {
    const [searchWord, setSearchWord] = useState("");

    return (
        <div className="search">
            <input
                type="text"
                value={searchWord}
                onChange={(e) => {
                    setSearchWord(e.target.value);
                }}
            />
            <div>{translate("search")}</div>
        </div>
    );
};

export default Search;
