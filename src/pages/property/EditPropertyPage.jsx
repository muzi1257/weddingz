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
import { Typography, Grid, makeStyles, TextField ,Card, CardActionArea ,CardMedia, CardActions} from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  getPropertyDetails,
  updateProperty,
} from '../../redux/actions/propertyActions';
import { PROPERTY_UPDATE_RESET } from '../../redux/constants/propertyConstants';

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

const EditPropertyPage = (props) => {
  const match = props.match;
  const { history } = props;
  const propertyId = match.params.id;

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState(false);
  const [address, setAddress] = useState(false);

  const dispatch = useDispatch();

  const propertyDetails = useSelector((state) => state.propertyDetails);
  const { error, loading, property } = propertyDetails;

  const propertyUpdate = useSelector((state) => state.propertyUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = propertyUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PROPERTY_UPDATE_RESET });
      history.push('/pages/users');
    } else {
      if (!property.name || property._id !== Number(propertyId)) {
        dispatch(getPropertyDetails(propertyId));
      } else {
        setName(property.name);
        setType(property.type);
        setLongitude(property.setLongitude);
        setLatitude(property.setLatitude);
        setAddress(property.setAddress);
      }
    }
  }, [property, propertyId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProperty({
        _id: property._id,
        name,
        type,
        longitude,
        latitude,
        address,
      })
    );
  };

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Edit Property : {property.name}
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
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
              InputLabelProps={{
                shrink: true,
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
              label="Add Property longitude"
              className={classes.mb3}
              placeholder="Enter longitude here"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
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
              InputLabelProps={{
                shrink: true,
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
              InputLabelProps={{
                shrink: true,
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
          UPDATE
        </Button>
      </Grid>
    </>
  );
};

export default EditPropertyPage;
