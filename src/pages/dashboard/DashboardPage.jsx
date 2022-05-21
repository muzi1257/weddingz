import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  Button,
  styled,
  TextField,
  CardMedia,
  CardActionArea,
  Card,
} from '@material-ui/core';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import AdminChart from '../../components/AdminChart/AdminChart';
import AdminBarChart from '../../components/AdminChart/AdminBarChart';
import AdminPieChart from '../../components/AdminChart/AdminPieChart';
import SimpleTable from './components/SimpleTable';
import clsx from 'clsx';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Assessment from '@material-ui/icons/Assessment';
import CardContent from '@material-ui/core/CardContent';
import InfoBox from './components/InfoBox';
import { purple, blue, red, orange, cyan } from '@material-ui/core/colors';
import Face from '@material-ui/icons/Face';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CalenderToday from '@material-ui/icons/CalendarToday';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import {
  listMills,
  deleteMill,
} from '../../redux/actions/millActions';
import Image from 'material-ui-image';
import Layout from '../../admin-layouts/layout/Layout';
import { TableFooter, TableCell, TableRow } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
};

const useStyles = makeStyles((theme) => ({
  paddingPaper: {
    padding: '15px 5px 5px 15px',
  },
  mt: {
    marginTop: 7,
  },
  titlePaper: {
    marginBottom: '36px',
  },
  visitorChart: {
    // height: "150px"
  },
  // root: {
  //   "& .appear-item": {
  //     display: "none"
  //   },
  //   "&:hover .appear-item": {
  //     display: "block"
  //   }
  // },
  root: {
    // maxWidth: 345,
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    borderRadius: theme.spacing(0),
    '&:hover': {
      backgroundColor: '#ADD8E6',
    },
  },
  media: {
    height: 240,
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
    name: 'price',
    label: 'Price',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'ratingsAverage',
    label: 'Ratings Average',
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

const DashboardPage = (props) => {
  const { history } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const millList = useSelector((state) => state.millList);
  const { loading, error, mills, total,weight, totalrent, totalTrolly } = millList;
  
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo ) {
      dispatch(listMills());
    }
  }, [dispatch, history, userInfo]);
  const options = {
    filter: true,
    selectableRows: true,
    filterType: "dropdown",
    rowsPerPage: 7,
  };


  return (
    <>
      <h1>Dashboard</h1>

      

      <Grid container spacing={2}>
        <Grid item container xs={12} sm={12}>
          <Grid item xs={12}>
            
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <AdminBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Expensis
            </Typography>
            <AdminPieChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
