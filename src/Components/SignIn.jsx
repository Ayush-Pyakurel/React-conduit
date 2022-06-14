import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()

    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .min(6)
    .max(12),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (e) => {
    console.log(e);
  };

  return (
    <Form className='signInForm' onSubmit={handleSubmit(formSubmit)}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <h2>Sign In</h2>
        <Link to='/signup' style={{ color: 'green', marginButton: '10px' }}>
          Need an account?
        </Link>
        <Form.Control
          type='email'
          placeholder='Enter email'
          style={{ height: '50px' }}
          name='email'
          required
          {...register('email', { required: true }, touchedFields)}
        />
        {errors.email ? (
          <p style={{ color: 'red' }}>{errors.email?.message}</p>
        ) : null}
        {touchedFields.email && (
          <p style={{ color: 'red' }}>Should enter the email</p>
        )}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          style={{ height: '50px' }}
          name='password'
          required
          {...register('password', { required: true }, touchedFields)}
        />
        {errors.password ? <p>{errors.password?.message}</p> : null}
        {touchedFields?.password && <p>Should enter Password</p>}
      </Form.Group>
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
