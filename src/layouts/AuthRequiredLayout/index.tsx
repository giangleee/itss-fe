import Slider from "../../components/Slider";
import { Outlet } from "react-router";

const AuthRequiredLayout = () => {
  return (
    <div className="pt-5 row">
      <div className="col-3 px-3">
        <Slider />
      </div>
      <div className="col-9 px-3 h-[600px]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthRequiredLayout;
