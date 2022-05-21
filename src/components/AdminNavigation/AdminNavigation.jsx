import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { alpha} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from 'react-redux'

import navigationConfig from "../../Admin-configs/navigationConfig";
import SearchIcon from "@material-ui/icons/Search";
import { capitalize, InputBase} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import TodayIcon from "@material-ui/icons/Today";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NotificationsIcon from "@material-ui/icons/Notifications";

import AdminNavGroup from "./sections/AdminNavGroup";
import AdminNavCollapse from "./sections/AdminNavCollapse";
import AdminNavItem from "./sections/AdminNavItem";
import AdminNavLink from "./sections/AdminNavLink";
import { Typography ,Avatar, Badge} from "@material-ui/core";
import clsx from "clsx";
import AdminAvatarBadge from "../AdminAvatarBadge/AdminAvatarBadge";
import ThemeContext from "../../context/ThemeContext";
import NavigationContext from "../../context/NavigationContext";


const useStyles = makeStyles((theme) => ({
  
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props.drawerWidth}px)`,
    marginLeft: (props) => props.drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: theme.mixins.toolbar,
  logoBg: {
    backgroundColor: theme.palette.type !== "dark" && "#18202c",
    // backgroundColor: "#18202c"
  },
  logo: {
    padding: "1rem",
    "& span": {
      display: "block",
      color: "rgba(41, 113, 245, 0.87)",
    },
  },
  navCustom: {
    "& .MuiTypography-root": {
      fontSize: ".85rem",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "35px",
    },
    "& .MuiCollapse-wrapperInner a": {
      paddingLeft: "50px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor:
      theme.palette.type === "dark"
        ? alpha(theme.palette.common.white, 0.15)
        : alpha(theme.palette.action.disabled, 0.15),
    "&:hover": {
      backgroundColor:
        theme.palette.type === "dark"
          ? alpha(theme.palette.common.white, 0.25)
          : alpha(theme.palette.action.disabled, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 4,
    marginRight: 14,
    marginBottom:9,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  
}));

const AdminNavigation = (props) => {
  
  const userLogin = useSelector(state => state.userLogin)
  const { error, loading, userInfo } = userLogin
  const classes = useStyles(props);
  const { open, handleDrawerToggle, handleRightPanelOpen } = React.useContext(
    NavigationContext
  );
  const { setThemeName, curThemeName } = React.useContext(ThemeContext);

  return (
    <div>
      <div className={clsx(classes.toolbar, classes.logoBg)}>
      
        
        <Typography
          className={classes.logo}
          variant="h6"
          component="h1"
          align="center"
        >
                    {/* <AdminAvatarBadge align="center">
                    
            <Avatar align="center"
              alt=" user Admin"
              src="https://lh5.googleusercontent.com/-WqhFe4eMggE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFUa5CK9Wi6g5qd8ZUt6apKFYSwA/photo.jpg?sz=328"
            />
            
          </AdminAvatarBadge> */}
          Weddings
          <span>&copy;</span>
           
          <span>Admin</span>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
          <div className={classes.appbarToday} align="center">
          <IconButton
            aria-haspopup="true"
            onClick={() =>
              curThemeName === "dark"
                ? setThemeName("light")
                : setThemeName("dark")
            }
            color="inherit"
          >
            {curThemeName === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
            
          <IconButton
            aria-haspopup="true"
            onClick={(event) => handleRightPanelOpen(event, 1)}
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
              aria-haspopup="true"
              onClick={(event) => handleRightPanelOpen(event, 2)}
              aria-label="show 4 new messages"
              color="inherit"
            >
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </div>
          
      <Divider />
      <List className={classes.navCustom}>
        {navigationConfig.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === "group" && <AdminNavGroup item={item} />}

            {item.type === "collapse" && <AdminNavCollapse item={item} />}

            {item.type === "item" && <AdminNavItem item={item} />}

            {item.type === "link" && <AdminNavLink item={item} />}

            {item.type === "divider" && <Divider className="my-16" />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default AdminNavigation;
