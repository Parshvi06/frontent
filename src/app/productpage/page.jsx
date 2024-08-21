'use client';
import { IconCircleCheck, IconLoader3 } from '@tabler/icons-react';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

// Validation schema for the form
const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  brand: Yup.string().required('Brand is required'),
  category: Yup.string().required('Category is required'),
  model: Yup.string().required('Model is required'),
  price: Yup.number().required('Number is required'),

});

const ProductForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      brand: '',
      category: '',
      model: '',
      price:''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // API request
      axios.post('http://localhost:5000/product/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success('Product registered successfully');
        })
        .catch((err) => {
          console.log(err);
          console.log(err.response?.data);
          setSubmitting(false);
          toast.error(err?.response?.data?.message || 'An error occurred');
        });
    },
    validationSchema: ProductSchema
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full max-w-md mx-auto'>
        <div className='rounded-lg border-2 shadow p-8'>
          <h1 className='uppercase font-bold my-6 text-3xl text-center text-gray-600'>Product Detail Form</h1>
          <form onSubmit={formik.handleSubmit}>
            {/* Title Field */}
            <label htmlFor="title">Title</label>
            <span className='text-sm text-red-500'>{formik.touched.title && formik.errors.title}</span>
            <input
              id='title'
              onChange={formik.handleChange}
              value={formik.values.title}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' + ((formik.touched.title && formik.errors.title) ? 'border-red-500' : '')}
            />

            {/* Brand Field */}
            <label htmlFor="brand">Brand</label>
            <span className='text-sm text-red-500'>{formik.touched.brand && formik.errors.brand}</span>
            <input
              id='brand'
              onChange={formik.handleChange}
              value={formik.values.brand}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' + ((formik.touched.brand && formik.errors.brand) ? 'border-red-500' : '')}
            />

            {/* Category Field */}
            <label htmlFor="category">Category</label>
            <span className='text-sm text-red-500'>{formik.touched.category && formik.errors.category}</span>
            <input
              id='category'
              onChange={formik.handleChange}
              value={formik.values.category}
              type="text"
              className={'border rounded w-full px-3 py-2 mb-4 ' + ((formik.touched.category && formik.errors.category) ? 'border-red-500' : '')}
            />

            {/* Model Field */}
            <label htmlFor="model">Model</label>
            <span className='text-sm text-red-500'>{formik.touched.model && formik.errors.model}</span>
            <input
              id='model'
              onChange={formik.handleChange}
              value={formik.values.model}
              type="text"
              disabled={formik.isSubmitting}
              className={'border rounded w-full px-3 py-2 mb-4 ' + ((formik.touched.model && formik.errors.model) ? 'border-red-500' : '')}
            />

             {/* Price Field */}

            <label htmlFor="price">Price</label>
            <span className='text-sm text-red-500'>{formik.touched.price && formik.errors.price}</span>
            <input
              id='price'
              onChange={formik.handleChange}
              value={formik.values.price}
              type="text"
              disabled={formik.isSubmitting}
              className={'border rounded w-full px-3 py-2 mb-4 ' + ((formik.touched.price && formik.errors.price) ? 'border-red-500' : '')}
            />

            {/* Submit Button */}
            <button
              type='submit'
              disabled={formik.isSubmitting}
              className='flex justify-center items-center bg-blue-500 text-white px-3 py-2 rounded w-full mt-8 disabled:opacity-50'
            >
              {formik.isSubmitting ? <IconLoader3 className='animate-spin' size={20} /> : <IconCircleCheck size={20} />}
              <span>{formik.isSubmitting ? 'Please Wait' : 'Submit'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;