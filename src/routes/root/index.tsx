import React, { useState } from "react";
import withSidebar from "../../utils/withSidebar.js";
import Logo from "./logo.js";
import Search from "./search.js";
import Filename from "./filename.js";
import Download from "./download.js";

const file = {
    searchUrl: {
        value: "",
        set: (url: string) => {
            url;
            return;
        },
    },

    filename: {
        value: "",
        set: (filename: string) => {
            filename;
            return;
        },
    },
};

export const RootContext = React.createContext(file);

const Root = () => {
    const [searchUrl, setSearchUrl] = useState("");
    const [filename, setFilename] = useState("");

    return (
        <RootContext.Provider
            value={{
                searchUrl: {
                    value: searchUrl,
                    set: setSearchUrl,
                },
                filename: {
                    value: filename,
                    set: setFilename,
                },
            }}
        >
            <Logo />
            <Search />
            <Filename />
            <Download />
        </RootContext.Provider>
    );
};

export default withSidebar(<Root />, "root");
