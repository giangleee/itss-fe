import { IconHome2 } from '@tabler/icons-react';

const SliderMenuItem = () => {
    return (
        <div className="menu-item__container">
            <div className="menu-item__icon">
                <IconHome2 width="40" height="40" />
            </div>
            <div className="menu-item__text">Housekeeper list</div>
        </div>
    );
};

export default SliderMenuItem;
