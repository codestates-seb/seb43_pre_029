import { FormStyle } from '../style/LoginStyle';
import { LoginInput } from '../Input';

import useBind from '../../logic/useBind';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = 'http://localhost:5000';

const onSubmit = (e, data, setAccessToken, setRefreshToken) => {
  e.preventDefault();

  console.log('data: ', data);
  axios
    .post(`${BASE_URL}/auth/login`, data)
    .then((res) => {
      setAccessToken(res.body['access_token']);
      setRefreshToken(res.body['refresh_token']);
    })
    .catch((err) => console.log(err));
};

const LoginForm = () => {
  // const navigate = useNavigate();
  const { emailBind, passwordBind } = useBind();
  // const [accessToken, setAccessToken] = useState('undefined');
  // const [refreshToken, setRefreshToken] = useState('undefined');

  // useEffect(() => {
  //   if (accessToken !== 'undefined') {
  //     localStorage.setItem('access_token', accessToken);
  //     localStorage.setItem('refresh_token', refreshToken);
  //   }
  // }, [accessToken, refreshToken]);

  const data = {
    email: emailBind.value,
    password: passwordBind.value,
  };

  return (
    <FormStyle onSubmit={(e) => onSubmit(e, data)}>
      {/* <FormStyle onSubmit={(e) => onSubmit(e, data, setAccessToken, setRefreshToken)}> */}
      <LoginInput label="Email" bind={emailBind} />
      <LoginInput label="Password" bind={passwordBind} />
      <button>Log in</button>
    </FormStyle>
  );
};

export default LoginForm;
