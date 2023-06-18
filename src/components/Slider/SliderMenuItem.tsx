import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SliderMenuItem {
  text: string;
  sliderIcon: ReactNode;
  router: string;
}

const SliderMenuItem: FC<SliderMenuItem> = ({ text, sliderIcon, router }) => {
  return (
    <NavLink
      className="menu-item__container"
      to={router}
    >
      <div className="menu-item__icon">{sliderIcon}</div>
      <div className="menu-item__text">{text}</div>
    </NavLink>
  );
};

export default SliderMenuItem;
