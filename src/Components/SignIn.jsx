import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useConduitContext } from './ConduitContextProvider';

const schema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()

    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
});

function SignIn() {
  const context = useConduitContext();
  const { loggedInStatus, setLoggedInStatus, logInCheck } = context;
  //console.log(loggedInStatus);
  // console.log(setLoggedInStatus);

  let currentUser;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    handleSubmit(formSubmit);
  });

  const formSubmit = async (user, e) => {
    //console.log(user);
    e.preventDefault();
    await fetch('https://api.realworld.io/api/users/login', {
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
        },
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        //logInCheck();
        logInCheck(res.status);
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.user.token);
        if (localStorage.getItem('token')) {
          currentUser = data.user.username;
          console.log(loggedInStatus);
          localStorage.setItem('loggedInStatus', loggedInStatus);
          localStorage.setItem('loggedInUser', currentUser);
          localStorage.setItem('loggedInUserEmail', data.user.email);
          navigate('/');
          toast.success('Successfully signed in!');
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <Form className='signInForm' onSubmit={handleSubmit(formSubmit)}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <div>
          <Toaster position='right-buttom' />
        </div>
        <h2>Sign In</h2>
        <Link to='/signup' style={{ color: ' #5cb85c', marginButton: '10px' }}>
          Need an account?
        </Link>
        <Form.Control
          type='email'
          placeholder='Enter email'
          style={{ height: '50px' }}
          name='email'
          required
          {...register('email', { isTouched: false }, touchedFields)}
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
          // onChange={(e) => setPassword(e.target.value)}
          required
          {...register('password', { required: true }, touchedFields)}
        />
        {errors.password ? <p>{errors.password?.message}</p> : null}
        {touchedFields?.password && <p>Should enter Password</p>}
      </Form.Group>
      <Button variant='success' type='submit' disabled={false}>
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
