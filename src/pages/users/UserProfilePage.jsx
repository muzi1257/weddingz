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

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import { updateUser, getUserDetails } from '../../redux/actions/userActions';
import { USER_UPDATE_RESET } from '../../redux/constants/userConstants';

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

const UserProfilePage = (props) => {
  const match = props.match;
  const { history } = props;

  const userId = match.params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [is_staff, setIsAdmin] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = userUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push('/users/getAllUsers/');
    } else {
      if (!user.name || user._id !== Number(userId)) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [user, userId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/users/${user._id}/edit`);
  };
  const alluserpageHandler = (e) => {
    e.preventDefault();
    history.push(`/users/getAllUsers/`);
  };

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        User Profile
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="User Name"
              className={classes.mb3}
              fullWidth
              value={name}
              variant="outlined"
              type="text"
              margin="normal"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="User Email"
              className={classes.mb3}
              fullWidth
              value={email}
              variant="outlined"
              type="text"
              margin="normal"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="User Password"
              className={classes.mb3}
              fullWidth
              value={password}
              variant="outlined"
              type="text"
              margin="normal"
              inputProps={{
                readOnly: true,
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <Checkbox
              {...label}
              defaultChecked
              checked={is_staff}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            IS ADMIN
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '10vh', minWidth: '20vh' }}
        >
          <Grid item xs={8} md={4}>
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

          <Grid item xs={8} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={alluserpageHandler}
            >
              All Users Page
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserProfilePage;
