import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listTrollys,
  deleteTrolly,
} from '../../redux/actions/trollyActions';
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
    label: 'Title',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'slug',
    label: 'Slug',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'price',
    label: 'Price',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'contactNo',
    label: 'Contact No',
    options: {
      filter: true,
      sort: false,
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
    name: 'area',
    label: 'Area',
    options: {
      filter: true,
      sort: false,
    },
    
  },
  
];

const AllTrollysPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const trollyList = useSelector((state) => state.trollyList);
  const { loading, error, venues } = trollyList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo ) {
      dispatch(listTrollys());
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
        dispatch(deleteTrolly(venues[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/trolly/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid>.</Grid>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Venues
          </Typography>
        </Grid>
       
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Venue List'}
        data={venues}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllTrollysPage;
