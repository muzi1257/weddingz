import React, { useState } from 'react';
import { useLocation } from 'react-router';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Inputs/Input';
import CheckBoxInput from '../../../components/Inputs/CheckBoxInput';
import SelectInput from '../../../components/Inputs/SelectInput';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Grid,
  makeStyles,
  Button,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { createVenue } from '../../../redux/actions/venueActions';
import database from '../../../firebase';
import { create } from 'yup/lib/array';
const schema = yup.object().shape({
  number: yup.string().required(),
});

const useStyles = makeStyles((theme) => ({
  mBottom: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '10px',
  },
  textField: {
    width: '100%',
  },
}));

const VenueForm = ({ preloadedValues }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      createdAt: new Date().toLocaleString(),
      vendor: useLocation().pathname.split('/')[2],
      ...preloadedValues,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(createVenue(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Input
            {...register('title')}
            id="title"
            type="text"
            label="Title"
            name="title"
            error={!!errors.title}
            helperText={errors?.title?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('slug')}
            id="slug"
            type="text"
            label="Slug"
            name="slug"
            error={!!errors.slug}
            helperText={errors?.slug?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('description')}
            id="description"
            type="text"
            label="Description"
            name="description"
            error={!!errors.description}
            helperText={errors?.description?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('image')}
            id="image"
            type="file"
            label="Image"
            name="image"
            error={!!errors.image}
            helperText={errors?.image?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('price')}
            id="price"
            type="number"
            label="Price"
            name="price"
            error={!!errors.price}
            helperText={errors?.price?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('contactNo')}
            id="contactNo"
            type="number"
            label="Contact Number"
            name="contactNo"
            error={!!errors.contactNo}
            helperText={errors?.contactNo?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('category')}
            id="category"
            type="number"
            label="Category"
            name="category"
            error={!!errors.category}
            helperText={errors?.category?.message}
          />
        </Grid>{' '}
        <Grid item xs={12} md={4}>
          <Input
            {...register('departureDate')}
            id="departureDate"
            type="datetime-local"
            label="Departure Date & Time"
            name="departureDate"
            error={!!errors.departureDate}
            helperText={errors?.departureDate?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('recieptImage')}
            id="recieptImage"
            type="file"
            label="Reciept Image"
            name="recieptImage"
            error={!!errors.recieptImage}
            helperText={errors?.recieptImage?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('wight_slip')}
            id="wight_slip"
            type="file"
            label="Weight Image"
            name="wight_slip"
            error={!!errors.wight_slip}
            helperText={errors?.wight_slip?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              endIcon={<SaveIcon />}
            >
              {preloadedValues ? 'Update Venue' : 'Save Venue'}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default VenueForm;
