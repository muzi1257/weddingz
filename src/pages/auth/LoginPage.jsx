import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Button, TextField } from '@material-ui/core';
import { login } from '../../redux/actions/userActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import {
  grey,
  green,
  blue,
  blueGrey,
  yellow,
  cyan,
  red,
} from '@material-ui/core/colors';

function LoginPage({ location, history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      // console.log(redirect)
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      background: '#0d131d',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',

    },
    mBottom: {
      marginBottom: '.5rem',
    },
    button: {
      marginTop: '.85rem',
    },
    loginCard: {
      width: '275px',
      borderRadius: 5,
      background: '#fff',
      padding: '.85rem',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.loginCard}>
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        {/* <Typography className={classes.brand} variant="h5" component="h1">
          Login
        </Typography> */}
        <Typography className={classes.mBottom} variant="body1">
          Sign In to your account
        </Typography>
        {loading &&<CircularProgress color="success" />}
        <form noValidate autoComplete="off">
          <TextField
            textcolor="secondary"
            size="small"
            label="Username"
            variant="outlined"
            margin="dense"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            size="small"
            label="Password"
            type="password"
            variant="outlined"
            margin="dense"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => history.push('/pages/auth/forgot-password')}
            color="secondary"
          >
            Forgot password?
          </Button>
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={submitHandler}
              onKeyDown={e => e.key === 'Enter' && submitHandler}
              
            >
              
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              className={classes.button}
              onClick={() => history.push('/pages/auth/register')}
            >
              Register Now!
            </Button>
          </div>
        </form>
        <Typography variant="caption">&copy; Admin | React Admin</Typography>
      </div>
      {/* <Typography variant="h3" gutterBottom>
        Oops! <span className={classes.statusCode}>404</span>
      </Typography>
      <Typography variant="body1">
        The page you are looking for was not found.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button> */}
    </div>
  );
}

export default LoginPage;
