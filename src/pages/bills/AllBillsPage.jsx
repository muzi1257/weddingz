import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { listBills, getBillDetails } from '../../redux/actions/billActions';
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
    label: 'Bill Type',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'property',
    label: 'Property',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'isPaid',
    label: 'Paid',
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <>{value == true ? <CheckIcon /> : <ClearIcon />}</>;
      },
    },
  },
];

const AllBillsPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const billList = useSelector((state) => state.billList);
  const { loading, error, bills } = billList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listBills());
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
        dispatch(getBillDetails(bills[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/pages/bills/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid>.</Grid>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            BILLS
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/pages/bills/add-bill')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Bill
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Bill List'}
        data={bills}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllBillsPage;
