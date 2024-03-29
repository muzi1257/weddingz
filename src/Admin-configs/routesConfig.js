import React from 'react';
import { Redirect } from 'react-router-dom';

import { DashboardPageConfig } from '../pages/dashboard/DashboardPageConfig';

import { UsersPageConfig } from '../pages/users/UsersPageConfig';
import { VendorPageConfig } from '../pages/vendors/VendorPageConfig';
import { VenuesPageConfig } from '../pages/venue/VenuePageConfig';
import { BlogsPageConfig } from '../pages/blog/BlogPageConfig';


import { Error404PageConfig } from '../pages/errors/404/Error404PageConfig';
import { Error500PageConfig } from '../pages/errors/500/Error500PageConfig';

const routeConfigs = [
  ...DashboardPageConfig.routes,
  ...UsersPageConfig.routes,
  ...VendorPageConfig.routes,
  ...VenuesPageConfig.routes,
  ...BlogsPageConfig.routes,
];

const routes = [
  ...routeConfigs,

  {
    component: () => <Redirect to="/errors/error-404" />,
  },
];

export default routes;
