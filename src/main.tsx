import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Archive from "./routes/archive/index.js";
import Downloading from "./routes/downloading/index.js";
import Root from "./routes/root/index.js";
import Settings from "./routes/settings/index.js";
import "./main.scss";

export type pageName = "root" | "downloading" | "archive" | "settings";

export const routes = [
    {
        path: "/",
        element: <Root />,
        description: "root",
    },
    {
        path: "/downloading",
        element: <Downloading />,
        description: "downloading",
    },
    {
        path: "/archive",
        element: <Archive />,
        description: "archive",
    },
    {
        path: "/settings",
        element: <Settings />,
        description: "settings",
    },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={createHashRouter(routes)} />
    </React.StrictMode>,
);
