import React from 'react';

const Button = ({
    label = 'Button',
    type = 'button',
    className = '',
    disabled = false
}) => {
    return (
        <div>
            <button
                type={type}
                disabled={disabled}
                className={
                        `text-white 
                        bg-primary 
                        hover:bg-primary 
                        text-center 
                        py-2.5 
                        px-5 
                        w-full 
                        text-sm 
                        rounded-lg 
                        font-medium 
                        focus:ring-blue-300 
                        focus:ring-4 
                        focus:outline-none
                        ${className}`
                }>
                {label}
            </button>
        </div>
    );
};

export default Button;
