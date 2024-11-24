import React from 'react'
import Input from '../../components/input';

function Form() {
    return (
        <div className='bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'>
            <div className='text-4xl font-extrabold'>Welcome</div>
            <div className='text-xl font-light mb-10'>Sign up now to get started</div>
            <Input label='Full Name' name='name' placeholder='Enter your full name'/>
            <Input label='Email' name='email' placeholder='Enter your email'/>
            <Input label='Password' name='password' placeholder='Enter your password'/>
        </div>
    )
}

export default Form;
