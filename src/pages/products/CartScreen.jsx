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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

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

const CartPage = (props) => {
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
      history.push('/pages/prodcuts');
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

  const [secondary, setSecondary] = React.useState(true);

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>
      <Typography className={classes.mb3} variant="h5" component="h1">
        CART Details
      </Typography>

      <AdminBreadcrumbs path={history} />

      <div className={classes.root}>
        <Box sx={{ flexGrow: 1, maxWidth: 892 }}>
          <FormGroup row></FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Items In Cart
              </Typography>
              <Demo>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <AddShoppingCartIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.name}
                      secondary={product.price}
                    />
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                )}
              </Demo>
            </Grid>
          </Grid>
        </Box>
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
            onClick={submitHandler}
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

export default CartPage;
