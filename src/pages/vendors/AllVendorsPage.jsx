import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listVendors,
  deleteVendor,
} from '../../redux/actions/vendorActions';
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
    name: 'title',
    label: 'Vendor',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'category',
    label: 'Category',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'slug',
    label: 'Slug',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'ratingsAverage',
    label: 'RatingsAverage',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'isApproved',
    label: 'Approved',
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <>{value === true ? <CheckIcon /> : <ClearIcon />}</>;
      },
    },
  },
];

const AllVendorsPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const vendorList = useSelector((state) => state.vendorList);
  const { loading, error, vendors } = vendorList;
  

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    
      dispatch(listVendors());
      history.push('/vendors');
     
  }, [dispatch, history, userInfo]);
  const options = {
    filterType: 'checkbox',
    onRowsDelete: (e) => {
      console.log(e.data);
    },
    onRowsDelete: (rowsDeleted, dataRows) => {
      rowsDeleted.data.forEach((row) => {
        dispatch(deleteVendor(vendors[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      history.push(`/v1/vendors/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Vendors
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/vendors/add-vendor')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Vendor
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Vendor List'}
        data={vendors}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllVendorsPage;
