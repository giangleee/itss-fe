import { lazy } from 'react';
import Loadable from '../components/Loadable';

const Sample = Loadable(lazy(() => import('../views/SampleView')));

const AuthRoutes = [{ path: '/', component: Sample }];

export default AuthRoutes
