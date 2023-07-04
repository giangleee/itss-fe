import "./style.scss";
import userImage from "../../assets/user-image.png";
import SliderMenuItem from "./SliderMenuItem";
import SliderFooter from "./SliderFooter";
import { FC, ReactNode, useState } from "react";
import SliderMenuItemData from "./SliderMenuItemData";
import { useSelector } from "../../states";
import { Avatar } from "@mui/material";

interface SliderMenuItemInterface {
  text: string;
  sliderIcon: ReactNode;
  router: string;
}

const Slider: FC = () => {
  const [sliderMenuItemData] = useState<SliderMenuItemInterface[]>(SliderMenuItemData);
  const { user } = useSelector((state) => state.auth);
  if (!user) return <></>;
  return (
    <div className="slide-container shadow-md rounded-xl">
      <div className="user-info__container">
        <div className="first">
          <div className="user-info__content">
            <div className="user-info__image">
              <Avatar src={user.avatar ? user.avatar : userImage} />
            </div>
            <div className="user-info__info">
              <div className="user-info__name">{user.fullName}</div>
            </div>
          </div>

          <div className="slider-menu">
            {sliderMenuItemData.map((item, index) => (
              <SliderMenuItem
                text={item.text}
                sliderIcon={item.sliderIcon}
                router={item.router}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="footer">
          <SliderFooter />
        </div>
      </div>
    </div>
  );
};

export default Slider;
