import AllVehiclesPage from './AllVehiclePage';
import AddVehiclePage from './AddVehiclePage';
import EditUserPage from './EditVehiclePage';
import VehicleDetailsPage  from './VehicleProfilePage'
export const VehiclesPageConfig = {
  routes: [
    {
      path: '/vehicles',
      exact: true,
      component: AllVehiclesPage,
    },
    {
      path: '/vehicles/add-vehicle',
      exact: true,
      component: AddVehiclePage,
    },
    {
      path: '/vehicles/:id',
      exact: true,
      component: VehicleDetailsPage,
    },

  ],
};
