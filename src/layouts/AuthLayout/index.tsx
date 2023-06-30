import {} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "../../states";

const AuthLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);
  if (isLogin) return <Navigate to={"/"} />;
  return (
    <div className="m-auto h-[650px] mt-3 w-[90%] flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
