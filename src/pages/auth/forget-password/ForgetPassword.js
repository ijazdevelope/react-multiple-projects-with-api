import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import myImg from '../../../static/images/ijaz.jpeg';
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ForgetPasswordSchema } from '../schema-validation/SchemaValidation';
import FontAwesom from '../../../components/FontAwesom';

const ForgetPassword = () => {

    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(ForgetPasswordSchema)
    });
    const onSubmit = (data) => console.log(data);

    return (
        <div className='container'>
            <div className="wrapper c-wrapper">
                <div className="row g-0">
                    <div className="col-md-5 col-lg-6 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form" className="img-fluid c-wrapper__img" />
                    </div>
                    <div className="col-md-5 col-lg-6 c-wrapper__columns">
                        <div className="c-wrapper__logo">
                            <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
                        </div>
                        <div className="c-wrapper__name">
                            <h3 className='c-wrapper__name__title'>Find Your Account</h3>
                            <p className='c-wrapper__name__text'>Please enter your email address to search for your account.</p>
                        </div>
                        <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className={`c-wrapper__form__field ${errors.email && 'border-danger border'}`}>
                                <FontAwesom className="fa-envelope-o" />
                                <Input
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    register={register}
                                    errorMsg={errors?.email?.message}
                                    setValue={setValue}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.email?.message}</p>
                            <Button className="btn c-wrapper__form__button" value='Submit'></Button>
                            <p className='c-wrapper__form__account'>Remember pasword? <Link to='/' className='c-wrapper__form__account__link'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword