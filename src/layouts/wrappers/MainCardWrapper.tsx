import Header from "../../components/Header/Header";
import { Outlet } from "react-router";

const MainCardWrapper = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainCardWrapper;
