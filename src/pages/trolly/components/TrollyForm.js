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
import { createTrolly } from '../../../redux/actions/trollyActions';
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

const TrollyForm = ({ preloadedValues }) => {
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
      mill: useLocation().pathname.split('/')[2],
      ...preloadedValues,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(createTrolly(data));
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Input
            {...register('number')}
            id="number"
            type="text"
            label="Number"
            name="number"
            error={!!errors.number}
            helperText={errors?.number?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('driver')}
            id="driver"
            type="text"
            label="Driver"
            name="driver"
            error={!!errors.driver}
            helperText={errors?.driver?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('acreName')}
            id="acreName"
            type="text"
            label="Acre Name"
            name="acreName"
            error={!!errors.acreName}
            helperText={errors?.acreName?.message}
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
            {...register('actualWeight')}
            id="actualWeight"
            type="number"
            label="Actual Weight"
            name="actualWeight"
            error={!!errors.actualWeight}
            helperText={errors?.actualWeight?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('loadedWeight')}
            id="loadedWeight"
            type="number"
            label="Loaded Weight"
            name="loadedWeight"
            error={!!errors.loadedWeight}
            helperText={errors?.loadedWeight?.message}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Input
            {...register('caneWeight')}
            id="caneWeight"
            type="number"
            label="Cane Weight"
            name="caneWeight"
            error={!!errors.caneWeight}
            helperText={errors?.caneWeight?.message}
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
              {preloadedValues ? 'Update Trolly' : 'Save Trolly'}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default TrollyForm;
