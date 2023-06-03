import { FC, ReactNode } from 'react';
import Header from '../../components/Header/Header';

interface WrapperProps {
    children?: ReactNode;
}

const MainCardWrapper: FC<WrapperProps> = ({ children }) => {
    return (
        <div className="container">
            <Header />
            <div className="pt-5">{children}</div>
        </div>
    );
};

export default MainCardWrapper;
