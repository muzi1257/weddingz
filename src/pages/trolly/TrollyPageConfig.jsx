import AllTrollysPage from './AllTrolliesPage';
import AddTrollyPage from './AddTrollyPage';
import TrollyDetailsPage from './TrollyProfilePage';
export const TrollysPageConfig = {
  routes: [
    {
      path: '/trolly',
      exact: true,
      component: AllTrollysPage,
    },
    {
      path: '/trolly/add-trolly',
      exact: true,
      component: AddTrollyPage,
    },
    {
      path: '/trolly/:id',
      exact: true,
      component: TrollyDetailsPage,
    },
  ],
};
