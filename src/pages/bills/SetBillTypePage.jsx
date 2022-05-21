import React from 'react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import {
  Paper,
  Grid,
  makeStyles,
  Typography,
  Button,
  styled,
  TextField,
  CardMedia,
  CardActionArea,
  Card,
} from '@material-ui/core';
import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import AdminChart from '../../components/AdminChart/AdminChart';
import AdminBarChart from '../../components/AdminChart/AdminBarChart';
import AdminPieChart from '../../components/AdminChart/AdminPieChart';
import SimpleTable from './components/SimpleTable';
import clsx from 'clsx';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Assessment from '@material-ui/icons/Assessment';
import CardContent from '@material-ui/core/CardContent';
import InfoBox from './components/InfoBox';
import { purple, blue, red, orange, cyan } from '@material-ui/core/colors';
import Face from '@material-ui/icons/Face';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CalenderToday from '@material-ui/icons/CalendarToday';

import Image from 'material-ui-image';
import Layout from '../../admin-layouts/layout/Layout';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
};

const useStyles = makeStyles((theme) => ({
  paddingPaper: {
    padding: '15px 5px 5px 15px',
  },
  mt: {
    marginTop: 7,
  },
  titlePaper: {
    marginBottom: '36px',
  },
  visitorChart: {
    // height: "150px"
  },
  // root: {
  //   "& .appear-item": {
  //     display: "none"
  //   },
  //   "&:hover .appear-item": {
  //     display: "block"
  //   }
  // },
  root: {
    // maxWidth: 345,
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    borderRadius: theme.spacing(0),
    '&:hover': {
      backgroundColor: '#ADD8E6',
    },
  },
  media: {
    height: 240,
  },
}));

const SetBillTypePage = (props) => {
  const { history } = props;
  const classes = useStyles();

  return (
    <>
      <Grid>....................</Grid>
      <h1>Dashboard</h1>

      <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/users/add-user')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/683833/pexels-photo-683833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                      </div>
                    </CardContent>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      color: 'black',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <h3>MADARIS</h3>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/property')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          color: 'black',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <h3>PROPERTIES</h3>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/employee')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          color: 'black',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <h3>EMPLOYEES</h3>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/employee')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />{' '}
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          color: 'black',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <h3>AGRICULTURE</h3>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/employee')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                      </div>
                      <div
                        style={{
                          position: 'absolute',
                          color: 'black',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <h3>VEHICLES</h3>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <CardActionArea
                className={classes.paddingPaper}
                onClick={() => history.push('/bills')}
              >
                <Card className={classes.root} elevation={3}>
                  <div className={classes.con}>
                    <CardContent className={classes.content}>
                      <div style={{ position: 'relative' }}>
                        <CardMedia
                          component="img"
                          height="250"
                          className={classes.media}
                          image="https://images.pexels.com/photos/6801635/pexels-photo-6801635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        />
                      </div>

                      <div
                        style={{
                          position: 'absolute',
                          color: 'black',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                        }}
                      >
                        <h3>OTHERS</h3>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </CardActionArea>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2}>
        <Grid item container xs={12} sm={8}>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                House Hold
              </Typography>
              <SimpleTable />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              className={clsx(classes.paddingPaper, classes.mt)}
              variant="outlined"
            >
              <Typography className={classes.titlePaper} variant="h5">
                Sales
              </Typography>
              <AdminBarChart />
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paddingPaper} variant="outlined">
            <Typography className={classes.titlePaper} variant="h5">
              Expensis
            </Typography>
            <AdminPieChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default SetBillTypePage;
