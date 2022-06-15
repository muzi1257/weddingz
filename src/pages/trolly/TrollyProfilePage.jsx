import React, { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
// import { EditorState, convertToRow } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'moment';

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField ,Card, CardActionArea,CardMedia,CardActions } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  getTrollyDetails,
  updateTrolly,
} from '../../redux/actions/trollyActions';
import { TROLLY_UPDATE_RESET } from '../../redux/constants/trollyConstants';
import Image from '@material-ui/core/ImageList';


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
  
  mb4: {
    margin: '0.8rem 0',
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
const TrollyDetailsPage = (props) => {
  const match = props.match;
  const { history } = props;
  const trollyId = match.params.id;

  

  const dispatch = useDispatch();

  const trollyDetails = useSelector((state) => state.trollyDetails);
  const { error, loading, venue } = trollyDetails;
  console.log(venue)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
        
    useEffect(() => {
          if (userInfo) {
            dispatch(getTrollyDetails(trollyId));
          } else {
            history.push('/login');
          }
        }, [dispatch, history, userInfo]);




  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Venue :
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
          image={venue?.photos[0]}
          alt={venue?.photo}
        />
        <CardContent>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            Venue
          </Typography>
          
        </CardContent>
        
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={4}>

              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={venue?.photos[1]}
          alt={venue?.photo}
        />
        <CardContent>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            Indoor
          </Typography>
          
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={venue?.photos[2]}
          alt={venue?.photo}
        />
       <CardContent>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            hall
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.mb3} gutterBottom variant="h4" component="div" align='center'>
            Venue Title : 
            {venue?.title} 
          </Typography>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
             Number : 
            {venue?._id}
          </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
           Price : 
            {venue?.price}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Contact Number : 
            {venue?.contactNo} 
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Category : 
            {venue?.category} 
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Catering Policy :  
            {venue?.cateringPolicy} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            DJ Policy :  
            {venue?.DJPolicy} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Decor Policy :  
            {venue?.decorPolicy} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Refund Policy :  
            {venue?.refundPolicy} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Kitchen :  
            {venue?.kitchen} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Parking :  
            {venue?.parking} 
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Area :  
            {venue?.area} 
            </Typography>
            <Typography className={classes.mb4} variant="h6" color="text.secondary">
            Description :  
            {venue?.description} 
            </Typography>
            

        </CardContent>
      </CardActionArea>
      
    </Card>
              </Grid>
      
              <Grid alignContent='center' item xs={12} md={4}>
      </Grid>
     
        </Grid>
        <Typography align='center'>
    <Button
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      

     >
Edit    </Button>
  </Typography>
          
      </div>
      
    </>
  );
};

export default TrollyDetailsPage;
