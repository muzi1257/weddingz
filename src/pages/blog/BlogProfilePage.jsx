import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import CardContent from '@material-ui/core/CardContent';
import Moment from 'moment';

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField ,Card, CardActionArea,CardMedia,CardActions } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  getBlogDetails,
  updateBlog,
} from '../../redux/actions/blogActions';
import { VENUE_UPDATE_RESET } from '../../redux/constants/blogConstants';
import Image from '@material-ui/core/ImageList';


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
  
  mb4: {
    margin: '0.8rem 0',
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
const BlogDetailsPage = (props) => {
  const match = props.match;
  const { history } = props;
  const blogId = match.params.id;

  

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { error, loading, blog } = blogDetails;
  console.log(blog)
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 
        
    useEffect(() => {
          if (userInfo) {
            dispatch(getBlogDetails(blogId));
          } else {
            history.push('/login');
          }
        }, [dispatch, history, userInfo]);




  const classes = useStyles();

  return (
    <>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Blog :
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid alignContent="center" container spacing={2}>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={blog?.photos[0]}
          alt={blog?.photo}
        />
       
        
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={4}>

              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={blog?.photos[1]}
          alt={blog?.photo}
        />
      
      </CardActionArea>
     
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={blog?.photos[2]}
          alt={blog?.photo}
        />
      
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={blog?.photos[3]}
          alt={blog?.photo}
        />
      
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={blog?.photos[4]}
          alt={blog?.photo}
        />
      
      </CardActionArea>
      
    </Card>
              </Grid>
              <Grid item xs={12} md={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.mb3} gutterBottom variant="h4" component="div" align='center'>
            Blog Title : 
            {blog?.title} 
          </Typography>
          <Typography className={classes.mb4} gutterBottom variant="h5" component="div">
             Number : 
            {blog?._id}
          </Typography>
          
            <Typography className={classes.mb4} variant="h6" color="text.secondary">
            Description :  
            {blog?.description} 
            </Typography>
            

        </CardContent>
      </CardActionArea>
      
    </Card>
              </Grid>
      
              <Grid alignContent='center' item xs={12} md={4}>
      </Grid>
     
        </Grid>
        <Typography align='center'>
    <Button
      color='primary'
      size='large'
      type='submit'
      variant='contained'
      

     >
Edit    </Button>
  </Typography>
          
      </div>
      
    </>
  );
};

export default BlogDetailsPage;
