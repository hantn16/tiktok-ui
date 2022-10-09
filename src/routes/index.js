import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Live from '~/pages/Live';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/layouts';
import { routes } from '~/configs';
const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },
  {
    path: routes.following,
    component: Following,
  },
  {
    path: routes.live,
    component: Live,
  },
  {
    path: routes.profile,
    component: Profile,
  },
  {
    path: routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routes.search,
    component: Search,
    layout: null,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
