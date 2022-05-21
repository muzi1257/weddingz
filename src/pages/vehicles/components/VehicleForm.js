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

const VehicleForm = ({ preloadedValues }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isAdmin: false,
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
        <Grid item xs={4}>
          <Input
            {...register('number')}
            id="number"
            type="text"
            label="Nmber"
            name="nnumber"
            error={!!errors.number}
            helperText={errors?.number?.message}
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
            {...register('model')}
            id="model"
            type="text"
            label="Model"
            name="model"
            error={!!errors.model}
            helperText={errors?.model?.message}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Input
            {...register('purchaseDate')}
            id="purchaseDate"
            type="date"
            label="Purchase Date"
            name="purchaseDate"
            error={!!errors.purchaseDate}
            helperText={errors?.purchaseDate?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('purchaseCost')}
            id="purchaseCost"
            type="number"
            label="Purchase Cost"
            name="purchaseCost"
            error={!!errors.purchaseCost}
            helperText={errors?.purchaseCost?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('fuelType')}
            id="fuelType"
            type="text"
            label="Fuel Type"
            name="fuelType"
            error={!!errors.purchaseCost}
            helperText={errors?.purchaseCost?.message}
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
              {preloadedValues ? 'Update Vehicle' : 'Save Vehicle'}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default VehicleForm;
