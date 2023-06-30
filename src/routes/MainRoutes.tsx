/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { Link, Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Loadable from "../components/Loadable";
import MainLayout from "../layouts/wrappers/MainCardWrapper";
import AuthRequiredLayout from "../layouts/AuthRequiredLayout";
import AuthLayout from "../layouts/AuthLayout";
// AuthRequiredLayout
const NewRequestView = Loadable(lazy(() => import("../views/NewRequestView")));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));
const RequestListWithoutAccept = Loadable(lazy(() => import("../views/RequestListWithoutAccept")));
const RequestInfo = Loadable(lazy(() => import("../views/RequestInfo/RequestInfo")));
const Review = Loadable(lazy(() => import("../views/Review")));
const RequestHistory = Loadable(lazy(() => import("../views/RequestHistory")));
const StaffLayout = Loadable(lazy(() => import("../components/Staff")));
// AuthLayout
const Login = Loadable(lazy(() => import("../components/Auth/Login")));
const Register = Loadable(lazy(() => import("../components/Auth/Register")));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AuthRequiredLayout />,
        children: [
          { path: "", element: <Navigate to="/staff" /> },
          { path: "staff/*", element: <StaffLayout /> },
          { path: "profile", element: <h1>Profile</h1> },
          { path: "new", element: <NewRequestView /> },
          {
            path: "pending",
            element: <Outlet />,
            children: [
              { path: "", element: <RequestListWithoutAccept /> },
              { path: ":request_id/apply-staff", element: <RequestList /> },
            ],
          },
          {
            path: "history",
            element: <Outlet />,
            children: [
              { path: "", element: <RequestHistory /> },
              {
                path: ":request_id/",
                element: <Outlet />,
                children: [
                  { path: "", element: <RequestInfo /> },
                  { path: "review", element: <Review /> },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "/",
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="w-full h-full flex flex-col items-center justify-evenly">
        <h1 className="font-mono text-8xl font-extrabold">Not found</h1>
        <Link to="/">
          <u>
            <i>
              <h1>Back to home</h1>
            </i>
          </u>
        </Link>
      </div>
    ),
  },
]);

export default appRouter;
