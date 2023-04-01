import React, { useState } from 'react';
import myImg from '../../../static/images/ijaz.jpeg';
import Input from '../../../components/Input';
import '../../../scss/components/_login.scss';
import Button from '../../../components/Button';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { SignupSchema } from '../schema-validation/SchemaValidation';
import FontAwesom from '../../../components/FontAwesom';
import { yupResolver } from '@hookform/resolvers/yup';

const Signup = () => {
  const [isVisible, setVisible] = useState(false);

  const { handleSubmit, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => console.log(errors);

  const handlerShowPassword = () => setVisible(!isVisible);

  return (
    <div className='container'>
      <div className="wrapper c-wrapper">
        <div className="row g-0">
          <div className="col-12 col-lg-5 d-none d-md-block">
            <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp'
              alt="signup form" className="img-fluid c-wrapper__img" />
          </div>
          <div className="col-12 col-lg-7 c-wrapper__columns">
            <div className="c-wrapper__logo">
              <img className="c-wrapper__logo__img" src={myImg} alt="login-img" />
            </div>
            <div className="c-wrapper__name">
              registration
            </div>
            <form className="c-wrapper__form" onSubmit={handleSubmit(onSubmit)}>
              <div className='d-md-flex justify-content-between'>
                <div>
                  <div className={`c-wrapper__form__field c-wrapper__form__field--user ${errors.fname && 'border-danger border'}`}>
                    <FontAwesom className="fa-user" />
                    <Input
                      type="text"
                      autoComplete="off"
                      name="fname"
                      id="fname"
                      placeholder="First name"
                      register={register}
                      errorMsg={errors?.fname?.message}
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.fname?.message}</p>
                </div>
                <div>
                  <div className={`c-wrapper__form__field c-wrapper__form__field--user ${errors.lname && 'border-danger border'}`}>
                    <FontAwesom className="fa-user" />
                    <Input
                      type="text"
                      autoComplete="off"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                      register={register}
                      errorMsg={errors?.lname?.message}
                      setValue={setValue}
                    />
                  </div>
                  <p className='c-wrapper__form__error'>{errors.lname?.message}</p>
                </div>
              </div>
              <div className={`c-wrapper__form__field ${errors.email && 'border-danger border'}`}>
                <FontAwesom className="fa-envelope-o" />
                <Input
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  register={register}
                  errorMsg={errors?.email?.message}
                  setValue={setValue}
                />
              </div>
              <p className='c-wrapper__form__error'>{errors.email?.message}</p>
              <div className='d-md-flex justify-content-between'>
                <div>
                  <div className={`c-wrapper__form__field c-wrapper__form__field--eye ${errors.password && 'border-danger border'}`}>
                    <FontAwesom className={` ${!isVisible ? 'fa-eye-slash' : 'fa-eye'} `} onClick={handlerShowPassword} />
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
                </div>
                <div>
                  <div className={`c-wrapper__form__field c-wrapper__form__field--eye ${errors.cpassword && 'border-danger border'}`}>
                    <FontAwesom className={` ${!isVisible ? 'fa-eye-slash' : 'fa-eye'} `} onClick={handlerShowPassword} />
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
                </div>
              </div>
              <Button className="btn c-wrapper__form__button" value='sign up'></Button>
              <p className='c-wrapper__form__account'>Already have an account? <Link to='/' className='c-wrapper__form__account__link'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;