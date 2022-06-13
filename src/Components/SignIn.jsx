import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link';

function SignIn() {
  return (
    <Form className='signInForm'>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <h2>Sign In</h2>
        <Link to='/signup' style={{ color: 'green', marginButton: '10px' }}>
          Need an account?
        </Link>
        <Form.Control
          type='email'
          placeholder='Enter email'
          style={{ height: '50px' }}
          required
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          style={{ height: '50px' }}
          required
        />
      </Form.Group>
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </Form>
  );
}

export default SignIn;
