import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Inputs/Input';
import CheckBoxInput from '../../../components/Inputs/CheckBoxInput';
import SelectInput from '../../../components/Inputs/SelectInput';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, makeStyles, Button, MenuItem } from '@material-ui/core';

const schema = yup.object().shape({
  name: yup.string().required(),
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

const PropertyForm = ({ preloadedValues }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...preloadedValues,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Input
            {...register('name')}
            id="name"
            type="text"
            label="Name"
            name="name"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </Grid>
        {/* <Grid item xs={4}>
          <SelectInput
            {...register('category')}
            id="category"
            name="category"
            className={classes.textField}
            label="Category"
            control={control}
            defaultValue={''}
            variant="outlined"
            margin="normal"
            error={!!errors.category}
            helperText={errors?.category?.message}
          >
            <MenuItem value="tags">Tags</MenuItem>
            <MenuItem value="cards">Cards</MenuItem>
            <MenuItem value="keychains">Keychains</MenuItem>
          </SelectInput>
          <Input
            {...register('email')}
            id="email"
            type="email"
            label="email"
            name="email"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
        </Grid> */}
        <Grid item xs={12} md={4}>
          <Input
            {...register('type')}
            id="type"
            type="text"
            label="Type"
            name="type"
            error={!!errors.type}
            helperText={errors?.type?.message}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Input
            {...register('longitude')}
            id="longitude"
            type="number"
            label="Longitude"
            name="longitude"
            error={!!errors.longitude}
            helperText={errors?.longitude?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('latitude')}
            id="latitude"
            type="number"
            label="Latitude"
            name="latitude"
            error={!!errors.latitude}
            helperText={errors?.latitude?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('address')}
            id="address"
            type="address"
            label="Address"
            name="address"
            error={!!errors.address}
            helperText={errors?.address?.message}
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
        <Grid item xs={12}>
          <div className={classes.mBottom}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="large"
              endIcon={<SaveIcon />}
            >
              {preloadedValues ? 'Update Property' : 'Save Property'}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default PropertyForm;
