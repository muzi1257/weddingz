import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listVehicles,
  deleteVehicle,
} from '../../redux/actions/vehicleActions';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles((theme) => ({
  my3: {
    margin: '1.3rem 0',
  },
  mb0: {
    marginBottom: 0,
  },
  mRight: {
    marginRight: '.85rem',
  },
  p1: {
    padding: '.85rem',
  },
}));

const columns = [
  {
    name: '_id',
    label: 'ID',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'number',
    label: 'Number',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'fuelType',
    label: 'Fuel Type',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'purchaseDate',
    label: 'Purchase Date',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const AllVehiclesPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const vehicleList = useSelector((state) => state.vehicleList);
  const { loading, error, vehicles } = vehicleList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listVehicles());
    } else {
      history.push('/login');
    }
  }, [dispatch, history, userInfo]);
  const options = {
    filterType: 'checkbox',
    onRowsDelete: (e) => {
      console.log(e.data);
    },
    onRowsDelete: (rowsDeleted, dataRows) => {
      rowsDeleted.data.forEach((row) => {
        dispatch(deleteVehicle(vehicles[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/vehicles/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid>.</Grid>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Vehicles
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/vehicles/add-vehicle')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Vehicle
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Vehicle List'}
        data={vehicles}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllVehiclesPage;
