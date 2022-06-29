import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const schema = yup.object().shape({
  ImageUrl: yup.string(),
  LoggedInUser: yup.string().required('Username is required!!'),
  Bio: yup.string().required('Please write something'),
  LoggedInUserEmail: yup.string().email().required('Email is mandatory!'),
  NewPassword: yup
    .string()
    .required('You must enter the password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  ConfirmNewPassword: yup
    .string()
    .required('You must re-enter the password!')
    .oneOf([yup.ref('NewPassword'), null], 'Passwords must match'),
});

function Settings() {
  const checkToken = localStorage.getItem('loggedInUser');

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const updateProfile = async (user, e) => {
    e.preventDefault();
    await fetch('https://api.realworld.io/api/user', {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        user: {
          username: user.LoggedInUser,
          email: user.LoggedInUserEmail,
          bio: user.Bio,
          password: user.NewPassword,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // window.location.reload();
      });
  };

  useEffect(() => {
    if (checkToken) {
      handleSubmit(updateProfile);
    }
  }, [handleSubmit, checkToken]);

  return (
    <Form className='form' onSubmit={handleSubmit(updateProfile)}>
      <h2>Settings</h2>
      <Form.Group className='mb-4' controlId='formBasicImageUrl'>
        <Form.Control
          type='text'
          placeholder='URL of your profile picture'
          style={{ height: '50px' }}
          name='ImageUrl'
          {...register('ImageUrl')}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicLoggedInUser'>
        <Form.Control
          type='text'
          placeholder={localStorage.getItem('loggedInUser')}
          style={{ height: '50px' }}
          name='LoggedInUser'
          required
          {...register('LoggedInUser')}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicBio'>
        <Form.Control
          type='text'
          as='textarea'
          placeholder='Short bio about you'
          style={{ height: '120px' }}
          name='Bio'
          required
          {...register('Bio')}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicLoggedInUserEmail'>
        <Form.Control
          type='text'
          placeholder={localStorage.getItem('loggedInUserEmail')}
          style={{ height: '50px' }}
          name='LoggedInUserEmail'
          required
          {...register('LoggedInUserEmail')}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicNewPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          style={{ height: '50px' }}
          name='NewPassword'
          required
          {...register('NewPassword')}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicConfirmNewPassword'>
        <Form.Control
          type='password'
          placeholder='Confirm Password'
          style={{ height: '50px' }}
          name='ConfirmNewPassword'
          required
          {...register('ConfirmNewPassword')}
        />
      </Form.Group>
      <Button variant='success' type='submit'>
        Update Settings
      </Button>
    </Form>
  );
}

export default Settings;
