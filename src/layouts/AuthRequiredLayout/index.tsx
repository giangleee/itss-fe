import Slider from "../../components/Slider";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "../../states";

const AuthRequiredLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  if (!isLogin) return <Navigate to={"/login"} />;
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
