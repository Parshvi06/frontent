import React from 'react';
import classes from './login.module.css';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Login = () => {
  return (

    <div>
      <h1 className='text-center text-2xl font-bold' >Login Page</h1>
      <button className='btn'>Login Button</button>
      <button className={classes.myBtn}>Module CSS</button>

      <Input id={'name'} label={'Full Name'} type={'text'} />
      <Input id={'email'} label={'Email Addres'} type={'email'} />
      <Input id={'password'} label={'Password'} type={'password'} />
      <Button>Login</Button>


    </div>
  )
}

export default Login;