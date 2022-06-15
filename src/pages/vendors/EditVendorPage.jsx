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
import VendorForm from './components/VendorForm';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  listVendorDetails,
  updateVendor,
} from '../../redux/actions/vendorActions';
import { VENDOR_UPDATE_RESET } from '../../redux/constants/vendorConstants';

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

const EditVendorPage = (props) => {
  const match = props.match;
  const { history } = props;
  const vendorId = match.params.id;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [Manager, setManager] = useState('');
  const [phone_number, setPhone_number] = useState('');

  const dispatch = useDispatch();

  const vendorDetails = useSelector((state) => state.vendorDetails);
  const { error, loading, vendor } = vendorDetails;

  const vendorUpdate = useSelector((state) => state.vendorUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = vendorUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: VENDOR_UPDATE_RESET });
      history.push('/pages/vendors');
    } else {
      if (!vendor.name || vendor._id !== Number(vendorId)) {
        dispatch(listVendorDetails(vendorId));
      } else {
        setName(vendor.name);
        setAddress(vendor.address);
        setManager(vendor.setManager);
        setPhone_number(vendor.setPhone_number);
      }
    }
  }, [vendor, vendorId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateVendor({
        _id: vendor._id,
        name,
        address,
        Manager,
        phone_number,
      })
    );
  };

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Edit Vendor : {vendor.name}
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <VendorForm/>
      </div>
    </>
  );
};

export default EditVendorPage;
