import { Button } from "@mui/material";
import { logout, useDispatch } from "../../states";

const UserInfo = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="outlined"
      onClick={() => {
        dispatch(logout());
      }}
    >
      Logout
    </Button>
  );
};

export default UserInfo;
