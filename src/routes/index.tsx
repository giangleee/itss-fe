import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainCardWrapper from "../layouts/wrappers/MainCardWrapper";
import mainRoutes from "./MainRoutes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const App: FC = () => {
  return (
    <BrowserRouter>
      <MainCardWrapper>
        <Routes>
          {mainRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </MainCardWrapper>
    </BrowserRouter>
  );
};

export default App;
