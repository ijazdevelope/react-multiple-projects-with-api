import React from 'react';
const Input = ({ placeholder, type, name, id, className, autoComplete, errorMsg, register, setValue }) => {

    return (
        <>
            <input
                className={`c-wrapper__form__field__input ${className && className}`}
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                autoComplete={autoComplete}
                {...(register && register(name))}
            />
            {errorMsg && (
                <i onClick={ () => setValue(name, '')} className="fa fa-times c-wrapper__form__field__error" aria-hidden="true"></i>
            )}
        </>
    )
}

export default Input;