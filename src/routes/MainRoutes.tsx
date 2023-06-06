import { lazy } from "react";
import Loadable from "../components/Loadable";

const Sample = Loadable(lazy(() => import("../views/SampleView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));

const MainRoutes = [
  { path: "/", component: Sample },
  { path: "/request-list", component: RequestList },
];

export default MainRoutes;
