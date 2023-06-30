import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import { loginSuccess, logout, useDispatch, useSelector } from "../../states";
import { useEffect } from "react";
import { getMe } from "../../api/request";
const MainCardWrapper = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getMe();
        dispatch(loginSuccess(user));
      } catch (error) {
        dispatch(logout());
      }
    };
    fetchUser();
  }, [dispatch]);
  if (isLoading) return null;
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainCardWrapper;
