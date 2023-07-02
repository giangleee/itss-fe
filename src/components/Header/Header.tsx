import { Avatar } from "@mui/material";
import "./style.scss";
const Header = () => {
  return (
    <div className="container-fluid header-container">
      <div className="header-layout">
        <div className="header-layout__content">
          <Avatar
            className="shadow-md"
            src="https://yt3.googleusercontent.com/ytc/AGIKgqNEz6zvmf7H6vVA5eBWARRTcnXUUP01djNEcEyMNw=s900-c-k-c0x00ffffff-no-rj"
          />
          <div className="header-layout__left-content text-2xl">Babyshark</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
