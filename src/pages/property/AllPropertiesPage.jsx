import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listProperties,
  deleteProperty,
} from '../../redux/actions/propertyActions';
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
    name: 'name',
    label: 'Property',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'address',
    label: 'Address',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'type',
    label: 'Status',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const AllPropertiesPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const propertyList = useSelector((state) => state.propertyList);
  const { loading, error, properties } = propertyList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProperties());
      history.push('/property');
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
        dispatch(deleteProperty(properties[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/property/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Properties
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/property/add-property')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Property
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Properties List'}
        data={properties}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllPropertiesPage;
