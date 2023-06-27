import { lazy } from "react";
import type { FC } from "react";
import { Link, Navigate } from "react-router-dom";
import Loadable from "../components/Loadable";

interface MainRoutesInterface {
  path: string;
  component: FC;
}

const NewRequestView = Loadable(lazy(() => import("../views/NewRequestView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));
const RequestListWithoutAccept = Loadable(lazy(() => import("../views/RequestListWithoutAccept")));
const RequestInfo = Loadable(lazy(() => import("../views/RequestInfo/RequestInfo")));
const Review = Loadable(lazy(() => import("../views/Review")));
const RequestHistory = Loadable(lazy(() => import("../views/RequestHistory")));
const StaffLayout = Loadable(lazy(() => import("../components/Staff")));

const MainRoutes: Array<MainRoutesInterface> = [
  {
    path: "/",
    component: () => {
      return <Navigate to="/staff" />;
    },
  },
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
  {
    path: "*",
    component: () => {
      return (
        <div className="flex flex-col w-full h-full items-center justify-evenly">
          <h1 className="font-mono text-8xl font-extrabold">Not found</h1>
          <Link to="/">
            <u>
              <i>
                <h1>Back to home</h1>
              </i>
            </u>
          </Link>
        </div>
      );
    },
  },
];

export default MainRoutes;
