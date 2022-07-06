import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listBlogs,
  deleteBlog,
} from '../../redux/actions/blogActions';
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
    name: 'shortDescription',
    label: 'Short Description',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'isFeatured',
    label: 'Featured',
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <>{value === true ? <CheckIcon /> : <ClearIcon />}</>;
      },
    },
  },
  
];

const AllBlogsPage = (props) => {
  const { history } = props;
  const classes = useStyles();

  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo ) {
      dispatch(listBlogs());
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
        dispatch(deleteBlog(blogs[row.dataIndex]._id));
      });
    },
    onRowClick: (rowData, rowState) => {
      console.log('click');
      history.push(`/getSingleBlog/${rowData[0]}`);
    },
  };
  return (
    <>
      
      <Grid container className={classes.my3} alignItems="center">
        <Grid item className={classes.mRight}>
          <Typography variant="h5" component="h1">
            Blogs
          </Typography>
        </Grid>
       
      </Grid>
      <AdminBreadcrumbs path={history} />
      <MUIDataTable
        title={'Blog List'}
        data={blogs}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default AllBlogsPage;
