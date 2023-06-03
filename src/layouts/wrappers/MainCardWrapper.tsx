import { FC, ReactNode } from 'react';

interface WrapperProps {
  children?: ReactNode;
}

const MainCardWrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {children}
    </div>
  );
};

export default MainCardWrapper;

