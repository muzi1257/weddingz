import React from 'react';
import AdminLayout from '../components/AdminLayout/AdminLayout';
import AdminRoutes from '../components/AdminRoutes/AdminRoutes';
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  IconButton,
  Box,
} from '@material-ui/core';
import NavigationContext from '../context/NavigationContext';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  root: {
    flexGrow: 1,
    height: 100,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  smallImage: {
    height: '10%',
    width: '20%',
  },
  largeImage: {
    height: '20%',
    width: '50%',
  },
}));
const AdminPage = ({ props }) => {
  const { open, handleDrawerToggle, handleRightPanelOpen } =
    React.useContext(NavigationContext);
  const classes = useStyles(props);
  return (
    <AdminLayout>
     
      <AdminRoutes />
    </AdminLayout>
  );
};

export default AdminPage;
