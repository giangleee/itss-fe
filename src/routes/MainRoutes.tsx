import { lazy } from "react";
import Loadable from "../components/Loadable";

const Sample = Loadable(lazy(() => import('../views/SampleView')))

const MainRoutes = {
    path: '/',
    // element: defind layout
    children: [
        {
            path: '/',
            element: <Sample />
        }
    ]
}

export default MainRoutes
