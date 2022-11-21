import { pageName, routes } from "../main.js";
import { Link } from "react-router-dom";
import { useState } from "react";

const SidebarIcon = (props: {
    description: string;
    path: string;
    current: string;
}) => {
    const buildSrc = (description?: string): string => {
        return `/public/${description || ""}.svg`;
    };

    const [src, setSrc] = useState(
        buildSrc(
            props.description +
                (props.current === props.description ? "_selected" : ""),
        ),
    );

    return (
        <Link to={props.path || "/"}>
            <li
                onMouseOver={() => {
                    if (props.current === props.description) return;
                    setSrc(buildSrc(`${props.description || ""}_selected`));
                }}
                onMouseOut={() => {
                    if (props.current === props.description) return;
                    setSrc(buildSrc(props.description));
                }}
                className={props.description}
            >
                <img
                    src={src}
                    alt={props.description}
                    title={props.description}
                />
            </li>
        </Link>
    );
};

const Sidebar = (props: { current: pageName }) => {
    const top = routes.slice(0, -1).map((route) => {
        return { ...route, current: props.current };
    });
    const bottom = {
        ...(routes.at(-1) || {
            path: "/settings",
            description: "settings",
        }),
        current: props.current,
    };

    return (
        <div className="sidebar">
            <ul>
                <div className="top">
                    {top.map((route) => {
                        props;
                        return (
                            <SidebarIcon key={route.description} {...route} />
                        );
                    })}
                </div>
                <div className="bottom">
                    <SidebarIcon {...bottom} />
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
