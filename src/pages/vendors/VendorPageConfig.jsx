import AllVendorsPage from './AllVendorsPage';
import AddVendorPage from './AddVendorPage';
import EditVendorPage from './EditVendorPage';
import VendorDetailsPage from './VendorDetailsPage';
import AddVenuePage from '../venue/AddVenuePage';
export const VendorPageConfig = {
  routes: [
    {
      path: '/vendors',
      exact: true,
      component: AllVendorsPage,
    },
    {
      path: '/vendor/add-vendor',
      exact: true,
      component: AddVendorPage,
    },
    {
      path: '/v1/vendors/:id',
      exact: true,
      component: VendorDetailsPage,
    },
    {
      path: '/vendors/:id/edit',
      exact: true,
      component: EditVendorPage,
    },
    {
      path: '/vendors/:id/add-vendor',
      exact: true,
      component: AddVenuePage,
    },
  ],
};
