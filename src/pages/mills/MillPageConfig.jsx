import AllMillsPage from './AllMillsPage';
import AddMillPage from './AddMillPage';
import EditMillPage from './EditMillPage';
import MillDetailsPage from './MillDetailsPage';
import AddTrollyPage from '../trolly/AddTrollyPage';
export const MillPageConfig = {
  routes: [
    {
      path: '/vendors',
      exact: true,
      component: AllMillsPage,
    },
    {
      path: '/vendor/add-vendor',
      exact: true,
      component: AddMillPage,
    },
    {
      path: '/v1/vendors/:id',
      exact: true,
      component: MillDetailsPage,
    },
    {
      path: '/mills/:id/edit',
      exact: true,
      component: EditMillPage,
    },
    {
      path: '/mills/:id/add-trolly',
      exact: true,
      component: AddTrollyPage,
    },
  ],
};
