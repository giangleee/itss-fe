import React, { lazy } from 'react';
import Loadable from '../components/Loadable';

interface MainRoutesInterface {
    path: string;
    component: React.ComponentType<unknown>;
}

const Sample = Loadable(lazy(() => import('../views/SampleView')));
const NewRequestView = Loadable(lazy(() => import('../views/NewRequestView')));
const RequestList = Loadable(lazy(() => import("../views/RequestListView")));

const MainRoutes: Array<MainRoutesInterface> = [
    { path: '/', component: Sample },
    { path: '/request/new', component: NewRequestView },
    { path: "/request-list", component: RequestList },
];

export default MainRoutes;
