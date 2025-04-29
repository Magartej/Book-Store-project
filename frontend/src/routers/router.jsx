
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path: "/orders",
                element: <div>Orders</div>
            },
            {
                path: "/about",
                element: <h1>about</h1>
            }
        ]
    },
]);

export default router;