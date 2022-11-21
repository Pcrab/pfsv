import React, { useState } from "react";
import withSidebar from "../../utils/withSidebar.js";
import Logo from "./logo.js";
import Search from "./search.js";
import Filename from "./filename.js";
import Download from "./download.js";

const file = {
    searchUrl: "",
    setSearchUrl: (url: string) => {
        url;
        return;
    },
    filename: "",
    setFilename: (filename: string) => {
        filename;
        return;
    },
};

export const RootContext = React.createContext(file);

const Root = () => {
    const [searchUrl, setSearchUrl] = useState("");
    const [filename, setFilename] = useState("");

    return (
        <RootContext.Provider
            value={{
                searchUrl,
                setSearchUrl,
                filename,
                setFilename,
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
