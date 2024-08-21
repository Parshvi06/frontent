'use client';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  number: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, 'Number Required'),
});

const Contact = () => {
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setTimeout(() => {
        console.log(values);
        resetForm();
        setSubmitting(false);
      }, 3000);
    },
    validationSchema: SignupSchema,
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx-auto'>
        <div className='rounded-lg border-2 shadow p-8'>
          <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Contact Form</h1>
          <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <span className='text-sm text-red-500'>{signupForm.touched.name && signupForm.errors.name}</span>
            <input
              id='name'
              name='name'
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.name && signupForm.errors.name) ? 'border-red-500' : '')}
              disabled={signupForm.isSubmitting}
            />

            <label htmlFor="email">Email Address</label>
            <span className='text-sm text-red-500'>{signupForm.touched.email && signupForm.errors.email}</span>
            <input
              id='email'
              name='email'
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
              type="email"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.email && signupForm.errors.email) ? 'border-red-500' : '')}
              disabled={signupForm.isSubmitting}
            />

            <label htmlFor="number">Phone Number</label>
            <span className='text-sm text-red-500'>{signupForm.touched.number && signupForm.errors.number}</span>
            <input
              id='number'
              name='number'
              onChange={signupForm.handleChange}
              value={signupForm.values.number}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.number && signupForm.errors.number) ? 'border-red-500' : '')}
              disabled={signupForm.isSubmitting}
            />

            <label htmlFor="message">Message</label>
            <span className='text-sm text-red-500'>{signupForm.touched.message && signupForm.errors.message}</span>
            <input
              id='message'
              name='message'
              onChange={signupForm.handleChange}
              value={signupForm.values.message}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' +
                ((signupForm.touched.message && signupForm.errors.message) ? 'border-red-500' : '')}
              disabled={signupForm.isSubmitting}
            />

            <button
              type='submit'
              disabled={signupForm.isSubmitting}
              className='flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
            >
              {signupForm.isSubmitting ? <IconLoader3 className='animate-spin' size={20} /> : <IconCircleCheck size={20} />}
              <span>{signupForm.isSubmitting ? 'Please Wait' : 'Submit'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
