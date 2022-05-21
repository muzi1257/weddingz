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

import AdminBreadcrumbs from '../../components/AdminBreadcrumbs/AdminBreadcrumbs';
import { Typography, Grid, makeStyles, TextField } from '@material-ui/core';
import AddPostRightPanels from '../../components/extra/AddPostRightPanels/AddPostRightPanels';
import { createProduct } from '../../redux/actions/productActions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { PRODUCT_CREATE_RESET } from '../../redux/constants/productConstants';
import ProductsForm from './components/ProductsForm';
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
const CreateProductPage = (props) => {
  const match = props.match;
  const { history } = props;
  const userId = match.params.id;

  const dispatch = useDispatch();
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (successCreate) {
      history.push(`/pages/products/${createdProduct._id}/edit`);
    }
  }, [dispatch, history, successCreate, createdProduct]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProduct());
  };

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const editor = useRef(null);
  const [bodyPost, setBodyPost] = useState('');

  const classes = useStyles();

  return (
    <>
      <Grid>.</Grid>

      <Typography className={classes.mb3} variant="h5" component="h1">
        Create New Sample Product
      </Typography>
      <AdminBreadcrumbs path={history} />
      <div className={classes.root}>
        <ProductsForm/>
      </div>
    </>
  );
};

export default CreateProductPage;
