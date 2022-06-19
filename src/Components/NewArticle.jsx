import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  artileTitle: yup.string().required('Article Title is required'),
  aboutArticle: yup.string().required('About Article is required'),
  Article: yup.string().required('Article is required'),
  tags: yup.string().required('Tags is required'),
});

function NewArticle() {
  //connecting yup to react-hook-form
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form className='forms' onSubmit={handleSubmit}>
      <h2>New Article</h2>
      <Form.Group className='mb-4' controlId='formBasicArticleTitle'>
        <Form.Control
          type='text'
          placeholder='Article Title'
          style={{ height: '50px' }}
          name='artileTitle'
          required
          {...register('artileTitle', { required: true })}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicArticleAbout'>
        <Form.Control
          type='text'
          placeholder={`${"What's this article about?"}`}
          style={{ height: '50px' }}
          name='aboutArticle'
          required
          {...register('aboutArticle', { required: true })}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicArticle'>
        <Form.Control
          type='textArea'
          as='textarea'
          rows={6}
          placeholder={`${'Write your article (in markdown) here'}`}
          style={{ height: '150px' }}
          name='Article'
          required
          {...register('Article', { required: true })}
        />
      </Form.Group>
      <Form.Group className='mb-4' controlId='formBasicArticleTag'>
        <Form.Control
          type='text'
          placeholder='Enter tags'
          style={{ height: '50px' }}
          name='tags'
          required
          {...register('tags', { required: true })}
        />
      </Form.Group>
      <Button variant='success' type='submit' disabled={false}>
        Publish Article
      </Button>
    </Form>
  );
}

export default NewArticle;
