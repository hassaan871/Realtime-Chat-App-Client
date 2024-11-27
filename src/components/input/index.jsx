import React from 'react';

const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    isRequired = false,
    placeholder = ''

}) => {
    return (
        <div className='mb-6 w-1/2'>
            <label
                for={name}
                className='block text-sm font-medium text-gray-800'>
                {label}
            </label>
            <input
                type={type}
                id={name}
                className=
                {`
                    ${className} 
                    bg-gray-50 
                    border 
                    border-gray-300 
                    text-gray-900 
                    text-sm 
                    rounded-lg 
                    block 
                    w-full 
                    p-2.5 
                    focus:ring-blue-500 
                    focus:border-blue-500
                `}
                required={isRequired}
                placeholder={placeholder}></input>
        </div>
    )
}

export default Input;
