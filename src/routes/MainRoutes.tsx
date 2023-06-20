import { lazy } from "react";
import type { FC } from "react";
import Loadable from "../components/Loadable";
import StaffLayout from "../components/Staff";

interface MainRoutesInterface {
  path: string;
  component: FC;
}

const Sample = Loadable(lazy(() => import("../views/SampleView")));
const NewRequestView = Loadable(lazy(() => import("../views/NewRequestView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));
const RequestListWithoutAccept = Loadable(lazy(() => import("../views/RequestListWithoutAccept")));
const Review = Loadable(lazy(() => import("../views/Review")));

const MainRoutes: Array<MainRoutesInterface> = [
  { path: "/", component: Sample },
  {
    path: "/staff/*",
    component: StaffLayout,
  },
  { path: "/profile", component: Sample },
  { path: "/request-list-staff", component: RequestList },
  { path: "/request/new", component: NewRequestView },
  { path: "/request-list-without-accept", component: RequestListWithoutAccept },
  { path: "/request-list", component: RequestList },
  { path: "/review", component: Review },
];

export default MainRoutes;
