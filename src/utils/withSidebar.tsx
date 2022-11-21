import Sidebar from "components/sidebar.js";
import { pageName } from "main.js";
import { ReactElement } from "react";

const withSidebar = (element: ReactElement, current: pageName) => {
    return () => {
        return (
            <>
                <Sidebar current={current} />
                {element}
            </>
        );
    };
};

export default withSidebar;
