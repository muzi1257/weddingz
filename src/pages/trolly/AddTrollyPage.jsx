import  { React, useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, useTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import DateFnsUtils from "@date-io/date-fns";
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
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker
} from "@material-ui/pickers";
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField , Box} from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import { createTrolly, listTrollys } from '../../redux/actions/trollyActions';
import { listMills } from '../../redux/actions/millActions';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import TrollyForm from './components/TrollyForm';


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
const AddTrollyPage = (props) => {
  const match = props.match;
  const { history, location } = props;

  const userId = match.params.id;

  const classes = useStyles();
 
  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Add New Venue
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <TrollyForm/>          
          
      </div>
    </>
  );
};

export default AddTrollyPage;
