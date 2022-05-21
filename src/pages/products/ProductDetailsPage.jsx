import React, { useState, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, styled } from '@material-ui/core/styles';
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
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import {
  updateProduct,
  listProductDetails,
} from '../../redux/actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../../redux/constants/productConstants';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

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
  textarea: {
    resize: 'both',
  },
  MuiTextField: {
    variant: 'outlined',
  },
  // demoEditor: {
  //   border: "1px solid #eee",
  //   padding: "5px",
  //   borderRadius: "2px",
  //   height: "350px"
  // }
}));
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductDetailsPage = (props) => {
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
  const theme = createTheme({
    props: {},
  });
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/prodcuts');
    } else {
      if (!product.name || product._id !== Number(productId)) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setBrand(product.brand);
        setPrice(product.price);
        setDescription(product.description);
      }
    }
  }, [product, productId, successUpdate, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/pages/products/${product._id}/edit`);
  };
  const cartHandler = (e) => {
    e.preventDefault();
    history.push(`/pages/products/${product._id}/cart`);
  };

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        Product Details
      </Typography>

      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <TextField
              id="standard-full-width"
              label="Product Name"
              className={classes.mb3}
              fullWidth
              variant="outlined"
              value={name}
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
              label="Product Brand"
              className={classes.mb3}
              fullWidth
              value={brand}
              variant="outlined"
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
              label="Product Price"
              className={classes.mb3}
              fullWidth
              value={price}
              variant="outlined"
              type="number"
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
          {/* <MuiThemeProvider theme={theme}> */}

          <Grid item xs={8} md={6}>
            <TextField
              id="standard-full-width"
              className={classes.mb3}
              // className={classes.MuiTextField}
              fullWidth
              multiline
              margin="normal"
              color="white"
              label="Product Description"
              InputProps={{
                textAlign: 'center',
                readOnly: true,
                rows: 3,
              }}
              value={description}
            />
          </Grid>
          {/* </MuiThemeProvider> */}
        </Grid>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Button
            variant="contained"
            endIcon={<AddShoppingCartIcon />}
            color="primary"
            fullWidth
            className={classes.button}
            onClick={cartHandler}
          >
            ADD TO CART
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={submitHandler}
            icon="cart"
          >
            Edit
          </Button>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
          ></IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetailsPage;
