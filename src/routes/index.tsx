import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainCardWrapper from '../layouts/wrappers/MainCardWrapper';
import authRoutes from './AuthRoutes'

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {authRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <MainCardWrapper>
                                <route.component />
                            </MainCardWrapper>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
