import { FC, ReactNode } from 'react';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider';

interface WrapperProps {
    children?: ReactNode;
}

const MainCardWrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <div className="pt-5 row">
                <div className='col-3 px-3'>
                <Slider />
                </div>
                <div className='col-9 px-3'>
                {children}
                </div>
            </div>
        </div>
    );
};

export default MainCardWrapper;
