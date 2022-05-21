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
import axios from 'axios';

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  updateProduct,
  listProductDetails,
} from '../../redux/actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../../redux/constants/productConstants';

import ButtonGroup from '@material-ui/core/ButtonGroup';

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
const ProductEditScreen = (props) => {
  const classes = useStyles();

  const match = props.match;
  const { history } = props;
  const productId = match.params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/pages/products');
    } else {
      if (!product.name || product._id !== Number(productId)) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setDescription(product.description);
      }
    }
  }, [dispatch, product, productId, history, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        description,
      })
    );
  };

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Edit Product
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add New Product Name"
              className={classes.mb3}
              placeholder="Enter Name here"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
                style: {
                  textAlign: 'center',
                },
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product Brand"
              className={classes.mb3}
              placeholder="Enter Brand here"
              fullWidth
              value={brand}
              textAlign="center"
              onChange={(e) => setBrand(e.target.value)}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product Description"
              className={classes.mb3}
              placeholder="Enter Description here"
              fullWidth
              textAlign="center"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Add Product Price"
              className={classes.mb3}
              placeholder="Enter Price here"
              fullWidth
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              inputProps={{
                min: 0,
                style: {
                  textAlign: 'center',
                },
              }}
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={submitHandler}
          >
            SUBMIT
          </Button>
        </Grid>
      </div>
    </>
  );
};

export default ProductEditScreen;
