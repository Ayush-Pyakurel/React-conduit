import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

function Settings() {
  return (
    <Form className='form'>
      <h2>Settings</h2>
      <Form.Group className='mb-4' controlId='formBasicImageUrl'>
        <Form.Control
          type='text'
          placeholder='URL of your profile picture'
          style={{ height: '50px' }}
          name='ImageUrl'
          required
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicLoggedInUser'>
        <Form.Control
          type='text'
          placeholder='Username'
          style={{ height: '50px' }}
          name='LoggedInUser'
          required
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
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicLoggedInUserEmail'>
        <Form.Control
          type='text'
          placeholder='Email'
          style={{ height: '50px' }}
          name='LoggedInUserEmail'
          required
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicNewPassword'>
        <Form.Control
          type='password'
          placeholder='Password'
          style={{ height: '50px' }}
          name='NewPassword'
          required
        />
      </Form.Group>
      <Button variant='success' type='submit' disabled={false}>
        Update Settings
      </Button>
    </Form>
  );
}

export default Settings;
