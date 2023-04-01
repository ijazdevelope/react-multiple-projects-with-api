import React from 'react';

const Button = ({className, value, type, onClick}) => {
    return (
        <>
            <button onClick={onClick && onClick} className={className} type={type} >{value}</button>
        </>
    )
}

export default Button;