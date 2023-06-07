import { lazy } from "react";
import Loadable from "../components/Loadable";

const Sample = Loadable(lazy(() => import("../views/SampleView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));
const RequestListWithoutAccept = Loadable(lazy(() => import("../views/RequestListWithoutAccept")));

const MainRoutes = [
  { path: "/", component: Sample },
  { path: "/request-list-staff", component: RequestList },
  { path: "/request-list-without-accept", component: RequestListWithoutAccept },
];

export default MainRoutes;
