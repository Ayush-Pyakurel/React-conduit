import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(6)
    .max(12)
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: yup
    .string()
    .min(6)
    .max(12)
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isTouched },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (user) => {
    console.log(user);
    await fetch('https://api.realworld.io/api/users', {
      body: JSON.stringify({
        user: {
          username: user.username,
          email: user.email,
          password: user.password,
        },
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <Form className='signUpForm' onSubmit={handleSubmit(formSubmit)}>
      <h2>Sign Up</h2>
      <Link to='/signin' style={{ color: ' #5cb85c', marginButton: '10px' }}>
        Have an account?
      </Link>
      <Form.Group className='mb-3' controlId='formBasicUsername'>
        <Form.Control
          type='text'
          placeholder='username'
          style={{ height: '50px' }}
          name='username'
          required
          {...register('username', { required: true }, { isTouched: true })}
        />
        {errors.username?.message ? <p>{errors.username?.message}</p> : null}
        {touchedFields.username && <p>Should enter Username</p>}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          type='email'
          placeholder='Enter email'
          style={{ height: '50px' }}
          name='email'
          required
          {...register('email', { required: true })}
        />
        {errors.email ? <p>{errors.email?.message}</p> : null}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          style={{ height: '50px' }}
          name='password'
          required
          {...register('password', { isDirty: false })}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicMatchPassword'>
        <Form.Control
          type='password'
          placeholder='Re-enter password'
          style={{ height: '50px' }}
          name='confirmPassword'
          required
          {...register('confirmPassword', { required: true })}
        />
        <p>{errors.confirmPassword?.message && 'Password should match!!'}</p>
      </Form.Group>
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default SignUp;
