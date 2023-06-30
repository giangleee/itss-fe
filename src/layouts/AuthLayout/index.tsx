import {} from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="m-auto h-[600px] mt-3 w-[90%] flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
