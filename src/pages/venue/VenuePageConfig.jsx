import AllVenuesPage from './AllTrolliesPage';
import AddVenuePage from './AddVenuePage';
import VenueDetailsPage from './VenueProfilePage';
export const VenuesPageConfig = {
  routes: [
    {
      path: '/venues',
      exact: true,
      component: AllVenuesPage,
    },
    {
      path: '/venue/add-venue',
      exact: true,
      component: AddVenuePage,
    },
    {
      path: '/getVenue/:id',
      exact: true,
      component: VenueDetailsPage,
    },
  ],
};
