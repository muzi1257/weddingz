import React, { useState, useEffect ,useRef} from 'react'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  ClickAwayListener,
  ListItemIcon,
  Hidden,
  TextField,
  Button
} from "@material-ui/core";

import AdminAvatarBadge from "../AdminAvatarBadge/AdminAvatarBadge";
import { AccountCircle, Settings, ExitToApp } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { updateUser, getUserDetails, logout } from '../../redux/actions/userActions'

import { composeWithDevTools } from 'redux-devtools-extension';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;


const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  },
  menuIcon: {
    minWidth: "25px"
  },
  paddingRightZero: {
    paddingRight: 0
  }
}));

const AdminAvatarMenu = (props) => {
  const match = props.match;
  const { history } = props;


  
  const [name, setName] = useState('')
  const userDetails = useSelector(state => state.userDetails)
  const { error, loading, user } = userDetails
  

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const userId = userInfo.id;


  const dispatch = useDispatch()
  useEffect(() => {

    
        
            setName(user.name)
        
    

}, [user, history])
  const logoutHandler = () => {
      dispatch(logout())
     
  }
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   history.push(`/users/${userId}`);
  // };
  const classes = useStyles(props);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <ListItem
        button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        alignItems="flex-start"
        className={classes.paddingRightZero}
      >
        <ListItemAvatar>
          <AdminAvatarBadge
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            variant="dot"
          >
            <Avatar
              alt=" user Admin"
              src="https://ibb.co/F8FZDzd"
            />
          </AdminAvatarBadge>
        </ListItemAvatar>
        <Hidden implementation="css" smDown>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="span" variant="subtitle2">
                  
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                
               

              </React.Fragment>
            }
          />
        </Hidden>
      </ListItem>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow">
                <Typography
                  align="center"
                  component="span"
                  variant="h5"
                  className={classes.inline}
                  color="textPrimary"
                >     
                </Typography>
                  <MenuItem onClick={handleClose}>
                  
                    <ListItemIcon className={classes.menuIcon}>
                      <AccountCircle fontSize="small" />
                      

                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon className={classes.menuIcon}>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    settings
                  </MenuItem>
                  <MenuItem onClick={logoutHandler} >
                    <ListItemIcon className={classes.menuIcon}>
                      <ExitToApp fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

AdminAvatarMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default AdminAvatarMenu;
