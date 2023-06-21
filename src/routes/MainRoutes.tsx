import { lazy } from "react";
import type { FC } from "react";
import Loadable from "../components/Loadable";

interface MainRoutesInterface {
  path: string;
  component: FC;
}

const Sample = Loadable(lazy(() => import("../views/SampleView")));
const NewRequestView = Loadable(lazy(() => import("../views/NewRequestView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));
const RequestListWithoutAccept = Loadable(lazy(() => import("../views/RequestListWithoutAccept")));
const RequestInfo = Loadable(lazy(() => import("../views/RequestInfo/RequestInfo")));
const Review = Loadable(lazy(() => import("../views/Review")));
const RequestHistory = Loadable(lazy(() => import("../views/RequestHistory")));
const StaffLayout = Loadable(lazy(() => import("../components/Staff")));

const MainRoutes: Array<MainRoutesInterface> = [
  { path: "/", component: Sample },
  {
    path: "/staff/*",
    component: StaffLayout,
  },
  { path: "/profile", component: () => <h1>Profile</h1> },
  { path: "/new", component: NewRequestView },
  { path: "/pending", component: RequestListWithoutAccept },
  { path: "/pending/:request_id/apply-staff", component: RequestList },
  { path: "/history", component: RequestHistory },
  { path: "/history/:request_id", component: RequestInfo },
  { path: "/history/:request_id/review", component: Review },
];

export default MainRoutes;
