// General import
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
///context
import { stateContext } from '../context/StateContextProvider';
//Styles
import Styles from '@/styles/Sign.module.css';
//Validator
import { validate } from '../shared/validate';

const SignIn = () => {
  // Context state
  const { state } = useContext(stateContext);
  const usersData = state.users;
  // Entry data state
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  // Errors state
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // Slider state
  const [number, setNumber] = useState('1');
  //Router
  const router = useRouter();
  // Slider changeHandler
  const changeImageHandler = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    setErrors(validate(data, 'Login'));
  }, [data, touched]);
  // Data entry changeHandler
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  // Form submit Handler
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      usersData.map((user) => {
        if (data.email === user.email && data.password === user.password) {
          localStorage.setItem('loginFlag', true);
          localStorage.setItem('id', user.id);
          console.log('You Singed Up Successefully', 'success');
          router.push(`/profile/${user.id}`);
        } else {
          console.log('User name or password incorrect', 'Faild');
        }
      });
    } else {
      setTouched({
        email: true,
        password: true,
      });
      console.log('Invalid data!', 'error');
    }
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.formContainer}>
        <form onSubmit={submitHandler} className={Styles.form}>
          <h2>Fiber</h2>
          <div className={Styles.formField}>
            <label>E-mail</label>
            <input
              className={
                errors.email && touched.email
                  ? Styles.uncompleted
                  : Styles.formInput
              }
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              placeholder="John@example.com"
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className={Styles.formField}>
            <label>Password</label>
            <input
              className={
                errors.password && touched.password
                  ? Styles.uncompleted
                  : Styles.formInput
              }
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              placeholder="At least 8 characters"
            />
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
          <div className={Styles.formField}>
            <button type="submit">Sign In</button>
            <p>
              I don't have an account{' '}
              <Link href="/Register/SignUp">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>

      <div className={Styles.sliderContainer}>
        <Image
          src={`/SignUp${number}.png`}
          alt="banner"
          className={Styles.SignUpImage}
          width={100}
          height={100}
          unoptimized
        />
        <h1>Unparalleled Templeates </h1>
        <p>
          Crafted by a team of professional designers, our templates are
          eunparalleled in the market
        </p>
        <div>
          <button
            className={number == 1 ? Styles.BtnSliderActive : Styles.BtnSlider}
            value="1"
            onClick={changeImageHandler}></button>
          <button
            className={number == 2 ? Styles.BtnSliderActive : Styles.BtnSlider}
            value="2"
            onClick={changeImageHandler}></button>
          <button
            className={number == 3 ? Styles.BtnSliderActive : Styles.BtnSlider}
            value="3"
            onClick={changeImageHandler}></button>
          <button
            className={number == 4 ? Styles.BtnSliderActive : Styles.BtnSlider}
            value="4"
            onClick={changeImageHandler}></button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
