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

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField ,Card, CardActionArea,CardMedia,CardActions } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  getVehicleDetails,
  updateVehicle,
} from '../../redux/actions/vehicleActions';
import { VEHICLE_UPDATE_RESET } from '../../redux/constants/vehicleConstants';
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

const VehicleDetailsPage = (props) => {
  const match = props.match;
  const { history } = props;
  const vehicleId = match.params.id;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [address, setAddress] = useState('');
  const [pic, setPic] = useState('');


  const dispatch = useDispatch();

  const vehicleDetails = useSelector((state) => state.vehicleDetails);
  const { error, loading, vehicle } = vehicleDetails;

  const vehicleUpdate = useSelector((state) => state.vehicleUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = vehicleUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: VEHICLE_UPDATE_RESET });
      history.push('/users');
    } else {
      if (!vehicle.name || vehicle._id !== Number(vehicleId)) {
        dispatch(getVehicleDetails(vehicleId));
      } else {
        setName(vehicle.name);
        setType(vehicle.type);
        setLongitude(vehicle.setLongitude);
        setLatitude(vehicle.setLatitude);
        setAddress(vehicle.setAddress);
        setPic(vehicle.pic);

      }
    }
  }, [vehicle, vehicleId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/vehicle/${vehicle._id}/edit`);
  };

  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Edit Vehicle : {vehicle.name}
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
      <Grid item xs={12} sm={4}>
            <Typography className={classes.titlePaper} variant="h5">
              Vehicle
            </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={vehicle.pic}
          alt={vehicle.pic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {vehicle.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {vehicle.address}
            </Typography>
            
          <Typography variant="body2" color="text.secondary">
            {vehicle.type}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
              </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product type"
              className={classes.mb3}
              placeholder="Enter type here"
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Vehicle longitude"
              className={classes.mb3}
              placeholder="Enter longitude here"
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </Grid>

          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product latitude"
              className={classes.mb3}
              placeholder="Enter latitude here"
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </Grid>

          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product Address"
              className={classes.mb3}
              placeholder="Enter address here"
              fullWidth
              margin="normal"
              variant="outlined"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>
        </Grid>
          
      </div>

      <Grid item xs={6} md={12}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
          onClick={submitHandler}
        >
          Edit
        </Button>
      </Grid>
    </>
  );
};

export default VehicleDetailsPage;
