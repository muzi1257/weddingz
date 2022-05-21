import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { InputBase, Badge , Avatar, ImageList} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import TodayIcon from "@material-ui/icons/Today";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AdminAvatarMenu from "../AdminAvatarMenu/AdminAvatarMenu";
import clsx from "clsx";
import NavigationContext from "../../context/NavigationContext";
import ThemeContext from "../../context/ThemeContext";
import AdminAvatarBadge from "../AdminAvatarBadge/AdminAvatarBadge";
import { Image, KeyboardTabSharp } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      theme.palette.type === 'dark'
        ? alpha(theme.palette.common.white, 0.15)
        : alpha(theme.palette.action.disabled, 0.15),
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? alpha(theme.palette.common.white, 0.25)
          : alpha(theme.palette.action.disabled, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  appbarSection: {
    display: 'flex',
    // display: "none",
    alignItems: 'center',
    // [theme.breakpoints.up("sm")]: {
    //   display: "flex"
    // }
  },
  appbarToday: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));
const AdminAppBar = (props) => {
  const classes = useStyles(props);
  const { open, handleDrawerToggle, handleRightPanelOpen } = React.useContext(
    NavigationContext
  );

  const { setThemeName, curThemeName } = React.useContext(ThemeContext);

  return (
    <AppBar
    title={<img src=""/>}
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
          
        </IconButton>

         
<div className={classes.grow} />
        <div className={classes.appbarSection}>
          
          <AdminAvatarMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

AdminAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default AdminAppBar;
