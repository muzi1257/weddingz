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

  const trollyList = useSelector((state) => state.trollyList);
  const { loading, error, venue } = trollyList;
  const trollyUpdate = useSelector((state) => state.trollyUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = trollyUpdate;

  useEffect(() => {
    if (successUpdate) {
      
        dispatch(getTrollyDetails(trollyId));
      }
    
  }, [ trollyId, successUpdate, history]);


  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Venue Details :
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
          // image={process.env.REACT_APP_API_URL + venue.image}
          // alt={venue.image}
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
          // image={process.env.REACT_APP_API_URL + venue.recieving_slip}
          // alt={venue.recieving_slip}
        />
        <CardContent>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            Reciept
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
          // image={process.env.REACT_APP_API_URL + venue.wieght_slip}
          // alt={venue.wieght_slip}
        />
       <CardContent>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            W
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.mb3} gutterBottom variant="h4" component="div">
            Venue Number:
            {/* {venue.number} */}
          </Typography>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
            Venue :
            {/* {venue.acreName} */}
          </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
           Driver:
            {/* {venue.driver} */}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Actual Weight (Before Loading):
            {/* {venue.venueWeight} kg */}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Loaded Weight:
            {/* {venue.loadedWeight} kg */}
            </Typography>
          <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Cane Weight:  
            {/* {venue.caneweight} kg */}
            </Typography>
            <Typography className={classes.mb4} variant="h5" color="text.secondary">
            Trolly Amount:  
            {/* {venue.amount} Rs */}
            </Typography>
            
            <Typography variant="h5" color="text.secondary">
            Trolly Departure
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
