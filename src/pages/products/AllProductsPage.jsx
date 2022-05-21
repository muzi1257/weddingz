import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listProducts,
  listProductDetails,
  deleteProduct,
} from '../../redux/actions/productActions';
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
    label: 'Product Name',
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
    name: 'createdAt',
    label: 'Formation Date',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const AllProductsPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
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
        dispatch(deleteProduct(products[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/products/${rowData[0]}`);
    },
  };
  return (
    <>
      <Grid>.</Grid>

      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Products
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('/products/create-product')}
            variant="outlined"
            color="primary"
            size="small"
          >
            Add Product
          </Button>
        </Grid>
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Product List'}
        data={products}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllProductsPage;
