import React, { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField ,Card, CardActions, CardActionArea,CardMedia, CardContent } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  listMillDetails,
  updateMill,
} from '../../redux/actions/millActions';
import { MILL_UPDATE_RESET } from '../../redux/constants/millConstants';
import Image from '@material-ui/core/ImageList';
import { number } from 'yup';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  my3: {
    margin: '1.3rem 0',
  },
  mb3: {
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
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const MillDetailsPage = (props) => {
  const match = props.match;
  const { history } = props;
  const millId = match.params.id;

  

  const dispatch = useDispatch();

  const millDetails = useSelector((state) => state.millDetails);
  const { error, loading, vendor } = millDetails;
  console.log(vendor)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
        
    useEffect(() => {
          if (userInfo) {
            dispatch(listMillDetails(millId));
          } else {
            history.push('/login');
          }
        }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/mills/${vendor._id}/edit`);
  };
  const trollyHandler = (e) => {
    e.preventDefault();
    history.push(`/mills/${vendor._id}/add-trolly`);
  };

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
      Vendor : 
      <Typography align='center'>
    <Button
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      onClick={trollyHandler}

     >
      Add New Vendor</Button>
      </Typography>
      </Typography>
      <AdminBreadcrumbs path={history} />
      <Grid container spacing={6} justify="center" alignItems="center" direction="row" style={{marginTop:'3'}}>
      <Grid item lg={8} xs={11}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.mb3} gutterBottom variant="h3" component="div">
            Vendor Name:
            {/* {vendor.category} */}
          </Typography>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
          Vendor Address:
            {/* {vendor.address} */}
          </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
           Manager:
            {/* {vendor.manager} */}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Phone Number:
            {/* {vendor.phone_number} */}
            </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={submitHandler} size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
              </Grid>
   
</Grid> 
      <div className={classes.root}>
      
          
      </div>

     
    </>
  );
};

export default MillDetailsPage;
