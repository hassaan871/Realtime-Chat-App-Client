import React from 'react';
import Input from '../../components/input';
import Button from '../../components/Button';

function Form({
    isSignIn = true
}) {
    return (
        <div className='bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
            <div className='text-4xl font-extrabold'>Welcome {isSignIn && "Back"}</div>
            <div className='text-xl font-light mb-10'>{ isSignIn ? "Sign in to proceed" : "Sign up now to get started"}</div>
            {!isSignIn && <Input label='Full Name' name='name' placeholder='Enter your full name'/>}
            <Input label='Email' name='email' placeholder='Enter your email'/>
            <Input label='Password' name='password' placeholder='Enter your password' className='mb-4'/>
            <Button label={isSignIn?'Sign In':'Sign up'}className='w-1/2 mb-4'/>
            <div>{isSignIn ?"Didn't have an account" :"Already have an account?"} <span className='text-primary cursor-pointer underline'>{isSignIn?"Sign up" :"Sign in"}</span></div>
        </div>
    )
}

export default Form;
