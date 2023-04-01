import React, { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import myImg from '../../../static/images/ijaz.jpeg';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    password: yup.string().required()
        .min(4, 'Password length should be at least 4 characters')
        .max(8, 'Password length should be at least 8 characters'),
    cpassword: yup.string().required('Confirm password is a required field.')
        .min(4, 'Password length should be at least 4 characters')
        .max(8, 'Password length should be at least 8 characters')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .oneOf([yup.ref("password")], "Passwords do not match")
}).required();

const ResetPassword = () => {
  const [isVisible, setVisible] = useState(false);

    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => console.log(data);

    const handlerShowPassword = () => setVisible(!isVisible);

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
                            Reset Password
                        </div>
                        <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="c-wrapper__form__field">
                                <span onClick={handlerShowPassword} className={`fa ${isVisible ? 'fa-eye' : 'fa-eye-slash'} c-wrapper__form__field__user`}></span>
                                <Input
                                    type={!isVisible ? "password" : "text"}
                                    autoComplete="off"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    register={register}
                                    errorMsg={errors?.password?.message}
                                    setValue={setValue}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.password?.message}</p>
                            <div className="c-wrapper__form__field">
                                <span onClick={handlerShowPassword} className={`fa ${isVisible ? 'fa-eye' : 'fa-eye-slash'} c-wrapper__form__field__user`}></span>
                                <Input
                                    type={!isVisible ? "password" : "text"}
                                    autoComplete="off"
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="Confirm password"
                                    register={register}
                                    errorMsg={errors?.cpassword?.message}
                                    setValue={setValue}
                                />
                            </div>
                            <p className='c-wrapper__form__error'>{errors.cpassword?.message}</p>
                            <Button className="btn c-wrapper__form__button" value='Submit'></Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;