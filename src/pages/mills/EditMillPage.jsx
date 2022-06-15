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
import MillForm from './components/MillForm';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  listMillDetails,
  updateMill,
} from '../../redux/actions/millActions';
import { MILL_UPDATE_RESET } from '../../redux/constants/millConstants';

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

const EditMillPage = (props) => {
  const match = props.match;
  const { history } = props;
  const millId = match.params.id;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [Manager, setManager] = useState('');
  const [phone_number, setPhone_number] = useState('');

  const dispatch = useDispatch();

  const millDetails = useSelector((state) => state.millDetails);
  const { error, loading, mill } = millDetails;

  const millUpdate = useSelector((state) => state.millUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = millUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: MILL_UPDATE_RESET });
      history.push('/pages/mills');
    } else {
      if (!mill.name || mill._id !== Number(millId)) {
        dispatch(listMillDetails(millId));
      } else {
        setName(mill.name);
        setAddress(mill.address);
        setManager(mill.setManager);
        setPhone_number(mill.setPhone_number);
      }
    }
  }, [mill, millId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateMill({
        _id: mill._id,
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
        Edit Vendor : {mill.name}
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <MillForm/>
      </div>
    </>
  );
};

export default EditMillPage;
