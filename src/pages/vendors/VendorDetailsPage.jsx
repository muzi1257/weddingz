import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField ,Card, CardActions, CardActionArea,CardMedia, CardContent } from '@material-ui/core';
import {
  listVendorDetails,
} from '../../redux/actions/vendorActions';


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
const VendorDetailsPage = (props) => {
  const match = props.match;
  const { history } = props;
  const vendorId = match.params.id;

  

  const dispatch = useDispatch();

  const vendorDetails = useSelector((state) => state.vendorDetails);
  const { error, loading, vendor } = vendorDetails;
  console.log(vendor)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
        
    useEffect(() => {
          if (userInfo) {
            dispatch(listVendorDetails(vendorId));
          } else {
            history.push('/login');
          }
        }, [dispatch, history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/vendors/${vendor._id}/edit`);
  };
  const venueHandler = (e) => {
    e.preventDefault();
    history.push(`/vendors/${vendor._id}/add-vendor`);
  };

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
      Vendor : 
      
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid alignContent="center" container spacing={2}>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={vendor?.photos[0]}
          alt={vendor?.image}
        />
        
        
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={4}>

              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={vendor?.photos[1]}
          alt={vendor?.photos}
        />
        
      </CardActionArea>
     
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={vendor?.photos[2]}
          alt={vendor?.photo}
        />
     
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <Typography className={classes.mb3} gutterBottom variant="h4" component="div" align='center'>
            Vendor Name :
            {vendor?.category}
          </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary" align='center'>
            Approved  :
            {String(vendor?.isApproved)}
            </Typography>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            Vendor Ratings :
            {vendor?.ratingsAverage}
          </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
          Payment Terms :
            {vendor?.paymentTerms}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Vendor Price :
            {vendor?.price}
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Contact Number :
            {vendor?.contactNo}
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Category :
            {vendor?.category}
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary" >
            Featured  :
            {String(vendor?.isFeatured)}
            </Typography>
            <Typography className={classes.mb4} variant="h6" color="text.secondary">
            Description :
            {vendor?.description}
            </Typography>

        </CardContent>
      </CardActionArea>
      
    </Card>
              </Grid>
      
              <Grid alignContent='center' item xs={12} md={4}>
      </Grid>
     
        </Grid>
        <Typography align='center' >
  
     
    <Button
      color='primary'
      size='large'
      type='submit'
      variant='contained'

     >
Approve This Vendor </Button>
  </Typography>
          
      </div>
      
    
     
    </>
  );
};

export default VendorDetailsPage;
