import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import routeConfig from '~/configs/routeConfig';
const publicRoutes = [
  {
    path: routeConfig.home,
    component: Home,
  },
  {
    path: routeConfig.following,
    component: Following,
  },
  {
    path: routeConfig.profile,
    component: Profile,
  },
  {
    path: routeConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routeConfig.search,
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
