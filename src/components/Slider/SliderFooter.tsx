import { IconLogout2 } from "@tabler/icons-react";
import { useDispatch, useSelector, logout } from "../../states";

const SliderFooter = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    if (!user) return;
    const confirm = window.confirm(`${user.fullName} アカウントからサインアウトしてもよろしいですか?`);
    if (confirm) dispatch(logout());
  };

  return (
    <div
      className="footer-content w-full"
      title="ログアウト"
      onClick={handleLogout}
    >
      <div className="footer-content__icon">
        <IconLogout2
          width="40"
          height="40"
        />
      </div>
      <div className="footer-content__text">ログアウト</div>
    </div>
  );
};

export default SliderFooter;
