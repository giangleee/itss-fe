import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const App: FC = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;
