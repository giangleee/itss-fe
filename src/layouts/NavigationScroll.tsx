import { Box } from '@mui/material';
import { useEffect, ReactNode, FC } from 'react';
import backgroundImage from '../assets/background.png';

interface NavigationScrollProps {
    children?: ReactNode;
}

const NavigationScroll: FC<NavigationScrollProps> = ({ children }) => {
    const location = window.location;
    const { pathname } = location;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return (
        <>
            <Box
                sx={{
                    // backgroundImage: `url(${backgroundImage})`,
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    background: `url(${backgroundImage}) no-repeat center center fixed`,
                }}>
                {children || null}
            </Box>
            {/* {children || null} */}
        </>
    );
};

export default NavigationScroll;
