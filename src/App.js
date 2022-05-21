import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import getTheme from './Admin-configs/themeConfig';
import ThemeContext from './context/ThemeContext';
import LoginPage from './pages/auth/LoginPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';

import { Switch, Route } from 'react-router-dom';
import Error404Page from './pages/errors/404/Error404Page';

import { useSelector } from 'react-redux';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/dashboard/DashboardPage';

const App = () => {
  const curThemeName = localStorage.getItem('appTheme') || 'light';

  const [themeType, setThemeType] = useState(curThemeName);

  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName);
    setThemeType(themeName);
  };

  const theme = getTheme({
    paletteType: themeType,
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <ThemeContext.Provider value={{ setThemeName, curThemeName }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Switch>
            <Route path="/login" component={LoginPage} exact />
            <Route
              path="/forgot-password"
              component={ForgotPasswordPage}
              exact
            />
            <Route path="/errors/error-404" component={Error404Page} exact />
            {userInfo  && (
              <Route path="/" component={AdminPage} />
            )}
            <Route component={Error404Page} />
          </Switch>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
