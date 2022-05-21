import AllUsersPage from './AllUsersPage';
import AddUserPage from './AddUserPage';
import EditUserPage from './EditUserPage';
import UserProfilePage from './UserProfilePage';

export const UsersPageConfig = {
  routes: [
    {
      path: '/users',
      exact: true,
      component: AllUsersPage,
    },
    {
      path: '/users/add-user',
      exact: true,
      component: AddUserPage,
    },
    {
      path: '/users/:id',
      exact: true,
      component: UserProfilePage,
    },
    {
      path: '/users/:id/edit',
      exact: true,
      component: EditUserPage,
    },
  ],
};
