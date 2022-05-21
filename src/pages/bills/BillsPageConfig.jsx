import AllBillsPage from './AllBillsPage';
import AddBillPage from './AddBillPage';
import EditUserPage from './EditBillPage';
import SetBillTypePage from './SetBillTypePage';

export const BillsPageConfig = {
  routes: [
    {
      path: '/bills',
      exact: true,
      component: AllBillsPage,
    },
    {
      path: '/bills/set-bill-type',
      exact: true,
      component: SetBillTypePage,
    },
    {
      path: '/bills/add-bill',
      exact: true,
      component: AddBillPage,
    },
    {
      path: '/bills/:id',
      component: EditUserPage,
    },
  ],
};
