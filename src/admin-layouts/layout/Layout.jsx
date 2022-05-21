import React from "react";

import NavigationContext from "../../context/NavigationContext";
import AdminDrawer from "./AdminDrawer";

import Main from "./Main";
import Header from "./Header";
import AdminRightPanel from "../../components/AdminRightPanel/AdminRightPanel";

const handleDrawerResponsive = () => {
  if (window.innerWidth < 900) {
    return false;
  }

  return true;
};

const Layout = (props) => {
  const [open, setOpen] = React.useState(() => handleDrawerResponsive());

  React.useEffect(() => {
    window.addEventListener("resize", resizeChecker);

    return () => {
      window.addEventListener("resize", resizeChecker);
    };
  }, []);

  const resizeChecker = () => {
    if (handleDrawerResponsive()) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openRightPanel, setOpenRightPanel] = React.useState(false);
  const handleRightPanelOpen = (event, newValue) => {
    setOpenRightPanel(!openRightPanel);
    handleChange(event, newValue);
  };

  return (
    <NavigationContext.Provider
      value={{
        open,
        handleDrawerToggle,
        value,
        handleChange,
        handleRightPanelOpen,
        openRightPanel,
        setOpenRightPanel,
      }}
    >
      <Header />
      <AdminDrawer drawerWidth={240} />
      <AdminRightPanel />
      <Main drawerWidth={240} />
    </NavigationContext.Provider>
  );
};

export default Layout;
