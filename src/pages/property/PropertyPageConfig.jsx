import AllPropertiesPage from './AllPropertiesPage';
import AddPropertyPage from './AddPropertyPage';
import EditPropertyPage from './EditPropertyPage';
import PropertyDetailsPage from './PropertyDetailsPage';
export const PropertyPageConfig = {
  routes: [
    {
      path: '/property',
      exact: true,
      component: AllPropertiesPage,
    },
    {
      path: '/property/add-property',
      exact: true,
      component: AddPropertyPage,
    },
    {
      path: '/property/:id',
      exact: true,
      component: PropertyDetailsPage,
    },
    {
      path: '/property/:id/edit',
      exact: true,
      component: EditPropertyPage,
    },
  ],
};
