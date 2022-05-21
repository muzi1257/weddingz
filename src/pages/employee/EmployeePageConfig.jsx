import AllEmployeePage from './AllEmployeePage';
import AddEmployeePage from './AddEmployeePage';
import EditEmployeePage from './EditEmployeePage';

export const EmployeePageConfig = {
  routes: [
    {
      path: '/employee',
      exact: true,
      component: AllEmployeePage,
    },
    {
      path: '/employee/add-employee',
      exact: true,
      component: AddEmployeePage,
    },
    {
      path: '/employee/:id',
      exact: true,
      component: EditEmployeePage,
    },
  ],
};
