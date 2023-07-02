import { Card, Typography } from "@mui/material";
import {
  useDispatch,
  useSelector,
  // updateAddress,
  // updateAvatar,
  // updateDistrict,
  // updateEmail,
  // updateFullName,
  // updateGender,
  // updatePhoneNumber,
  // updateProvince,
} from "../../states";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // TODO: Sau khi chỉnh sửa profile xong thì nhớ dispatch action update thông tin user nhé(để những trang khác có thể lấy thông tin user mới nhất)
  if (!user) return null;
  return (
    <Card className="w-full h-full flex flex-col">
      <Typography
        variant="h3"
        fontWeight={700}
        align="center"
        m={3}
      >
        個人情報
      </Typography>
      <div className="flex-1 bg-red-200 overflow-x-hidden overflow-y-auto">
        {/* test: bỏ đoạn code dưới nếu làm nhá */}
        {Object.entries(user).map(([key, value]) => {
          if (key === "id") return null;
          return (
            <div
              key={key}
              className="flex items-center justify-between border-b border-gray-300 py-2 px-4"
            >
              <Typography fontWeight={700}>{key}</Typography>
              <Typography whiteSpace="nowrap">{value}</Typography>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Profile;
