import withSidebar from "../../utils/withSidebar.js";
import Logo from "./logo.js";
import Search from "./search.js";
import Filename from "./filename.js";
import Download from "./download.js";
import "./index.scss";

const Root = () => {
    return (
        <>
            <Logo />
            <Search />
            <Filename />
            <Download />
        </>
    );
};

export default withSidebar(<Root />, "root");
