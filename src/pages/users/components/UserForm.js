import React, { useState } from 'react';
import Form from '../../../components/Form/Form';
import Input from '../../../components/Inputs/Input';
import CheckBoxInput from '../../../components/Inputs/CheckBoxInput';
import { useDispatch, useSelector } from 'react-redux';
import SaveIcon from '@material-ui/icons/Save';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../redux/actions/userActions';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Grid,
  makeStyles,
  Button,
  MenuItem,
  TextField,
} from '@material-ui/core';

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

const UserForm = ({ preloadedValues }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    cnic: '',
    contact: '',
    address: '',
    isAdmin: '',
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (data) => {
    console.log(data);
    createUser(data);
  };
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

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <form method="POST">
        <Grid container spacing={3}>
          <TextField
            {...register('id')}
            id="id"
            type="hidden"
            name="id"
            error={!!errors._id}
            helperText={errors?._id?.message}
          />
          <Grid item xs={12} md={4}>
            <Input
              {...register('name')}
              id="name"
              type="text"
              label="Name"
              name="name"
              value={userData.name}
              onChange={postUserData}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              {...register('email')}
              id="email"
              type="email"
              label="email"
              name="email"
              value={userData.email}
              onChange={postUserData}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              {...register('cnic')}
              id="cnic"
              type="text"
              label="CNIC"
              name="cnic"
              value={userData.cnic}
              onChange={postUserData}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Input
              {...register('contact')}
              id="contact"
              type="text"
              label="Contact Number"
              name="contact"
              value={userData.contact}
              onChange={postUserData}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Input
              {...register('address')}
              id="address"
              type="text"
              label="Address"
              name="address"
              value={userData.address}
              onChange={postUserData}
              error={!!errors.name}
              helperText={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <CheckBoxInput
              {...register('isAdmin')}
              id="isAdmin"
              name="isAdmin"
              label="IsAdmin"
              value={userData.isAdmin}
              onChange={postUserData}
              control={control}
              error={!!errors.isAdmin}
              helperText={errors?.isAdmin?.message}
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
                {preloadedValues ? 'Update USer' : 'Save User'}
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Form>
  );
};

export default UserForm;
