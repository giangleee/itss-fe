import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface SliderMenuItem {
    text: string,
    sliderIcon: ReactNode,
    router: string,
}

const SliderMenuItem: FC<SliderMenuItem> = ({text, sliderIcon, router}) => {

    const navigate = useNavigate();

    const handleRedict = () => {
        navigate(router)
    }

    return (
        <div className="menu-item__container" onClick={() => handleRedict()}>
            <div className="menu-item__icon">
                { sliderIcon }
            </div>
            <div className="menu-item__text">{ text }</div>
        </div>
    );
};

export default SliderMenuItem;
