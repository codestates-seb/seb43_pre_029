import { FormStyle } from '../style/LoginStyle';
import { LoginInput } from '../Input';

import useBind from '../../logic/useBind';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = 'http://localhost:5000';

const onSubmit = async (e, data, setAccessToken, setRefreshToken) => {
  e.preventDefault();

  await axios
    .post(`${BASE_URL}/auth/login`, data)
    .then((res) => {
      setAccessToken(res.data['accessToken']);
      setRefreshToken(res.body['refresh_token']);
    })
    .catch((err) => console.log(err));
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { emailBind, passwordBind } = useBind();
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  useEffect(() => {
    if (accessToken !== '' && accessToken !== undefined) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      navigate('/');
    }
  }, [accessToken, refreshToken]);

  const data = {
    email: emailBind.value,
    password: passwordBind.value,
  };

  return (
    <FormStyle onSubmit={(e) => onSubmit(e, data, setAccessToken, setRefreshToken)}>
      <LoginInput label="Email" bind={emailBind} />
      <LoginInput label="Password" bind={passwordBind} />
      <button>Log in</button>
    </FormStyle>
  );
};

export default LoginForm;
