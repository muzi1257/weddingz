import Error404Page from './Error404Page';

export const Error404PageConfig = {
  routes: [
    {
      path: '/errors/error-404',
      exact: true,
      component: Error404Page,
    },
  ],
};
