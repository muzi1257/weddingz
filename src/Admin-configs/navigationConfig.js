// import { MaterialUIComponentsNavigation } from "../documentation/material-ui-components/MaterialUIComponentsNavigation";
import { logout } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

// const logout = (props) => {
//   const logoutHandler = () => {
//     dispatch(logout());
//   };
//   const dispatch = useDispatch();
// };

const navigationConfig = [
  {
    id: 'Main',
    title: 'MAIN',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'apps',
        url: '/',
        exact: true,
      },
      {
        id: 'users',
        title: 'Users',
        type: 'collapse',
        icon: 'person',
        badge: {
          title: '2',
          bg: '#668AE8',
          fg: '#FFFFFF',
        },
        children: [
          {
            id: 'all users',
            title: 'All Users',
            type: 'item',
            url: '/users',
            exact: true,
          },
          {
            id: 'add user',
            title: 'Add User',
            type: 'item',
            url: '/users/add-user',
            exact: true,
          },
        ],
      },

      {
        id: 'vendors',
        title: 'Vendor',
        type: 'collapse',
        icon: 'house',
        badge: {
          title: '2',
          bg: '#e88a',
          fg: '#FFFFFF',
        },
        children: [
          {
            id: 'vendors',
            title: 'All vendors',
            type: 'item',
            url: '/vendors',
            exact: true,
          },
          {
            id: 'add vendor',
            title: 'Add Vendor',
            type: 'item',
            url: '/vendor/add-vendor',
            exact: true,
          },
        ],
      },
      {
        id: 'venues',
        title: 'Venues',
        type: 'collapse',
        icon: 'map-pin',
        badge: {
          title: '2',
          bg: '#e88a',
          fg: '#FFFFFF',
        },
        children: [
          {
            id: 'all venues',
            title: 'All Venues',
            type: 'item',
            url: '/venues',
            exact: true,
          },
          {
            id: 'create venue',
            title: 'Create Venue',
            type: 'item',
            url: '/venue/add-venue',
            exact: true,
          },
        ],
      },
    ],
  },
  {
    id: 'Pages',
    title: 'Pages',
    type: 'group',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'lock',
        children: [
          {
            id: 'Login',
            title: 'Login',
            type: 'item',
            url: '/auth/login',
            exact: true,
          },
          {
            id: 'Register',
            title: 'Register',
            type: 'item',
            url: '/auth/register',
            exact: true,
          },
          {
            id: 'Forgot Password',
            title: 'Forgot Password',
            type: 'item',
            url: '/auth/forgot-password',
            exact: true,
          },
        ],
      },
      {
        id: 'calendar',
        title: 'Calendar',
        type: 'item',
        icon: 'event',
        url: '/calendar',
        exact: true,
      },
      ,
      ,
    ],
  },
];

export default navigationConfig;
