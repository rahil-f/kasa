import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./component/error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home.jsx";
import Apropos from "./component/apropos.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/apropos",
        element: <Apropos />,
    },
    {
        path: "*",
        element: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
