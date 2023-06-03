import { useEffect, ReactNode, FC } from 'react';

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

  return <>{children || null}</>
};

export default NavigationScroll;
