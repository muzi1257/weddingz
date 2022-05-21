import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listEmployee,
  deleteEmployee,
} from '../../redux/actions/employeeActions';
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
    label: 'Employee name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'CNIC',
    label: 'CNIC',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'isUser',
    label: 'User',
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <>{value == true ? <CheckIcon /> : <ClearIcon />}</>;
      },
    },
  },
];

const AllEmployeePage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employeeList);
  const { loading, error, employees } = employeeList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listEmployee());
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
        dispatch(deleteEmployee(employees[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/employees/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Employee
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/employee/add-employee')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Employee List'}
        data={employees}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllEmployeePage;
