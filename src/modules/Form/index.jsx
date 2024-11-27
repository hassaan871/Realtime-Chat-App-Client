import React, { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/Button';

const Form = ({isSignIn = true}) => {

    const [data, setData] = useState({
        ...(!isSignIn && {fullName: ''}),
        email: '',
        password: ''
    })
// console.log(`data: ${data.fullName}`);

    return (
        <div className='bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
            <div className='text-4xl font-extrabold'>Welcome {isSignIn && "Back"}</div>
            <div className='text-xl font-light mb-10'>{ isSignIn ? "Sign in to proceed" : "Sign up now to get started"}</div>
            {!isSignIn && <Input label='Full Name' name='name' placeholder='Enter your full name' value={data.fullName} onChange={(event) => {setData({...data, fullName: event.target.value})}}/>}
            <Input label='Email' name='email' placeholder='Enter your email' value={data.email} onChange={(event) => {setData({...data, email: event.target.value})}}/>
            <Input label='Password' name='password' placeholder='Enter your password' className='mb-4' value={data.password} onChange={(event) => {setData({...data, password: event.target.value})}}/>
            <Button label={isSignIn?'Sign In':'Sign up'}className='w-1/2 mb-4'/>
            <div>{isSignIn ?"Didn't have an account" :"Already have an account?"} <span className='text-primary cursor-pointer underline'>{isSignIn?"Sign up" :"Sign in"}</span></div>
        </div>
    )
}

export default Form;
