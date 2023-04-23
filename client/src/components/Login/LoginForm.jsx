import { FormStyle } from '../style/LoginStyle';
import { LoginInput } from '../Input';

import useBind from '../../logic/useBind';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';
import { loginSubmit } from '../../logic/onSubmit';

/** 2023/03/17 - 로그인시 이메일 패스워드 입력창 - fe-hyungUk */
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
    <FormStyle onSubmit={(e) => loginSubmit(e, data, setAccessToken, setRefreshToken)}>
      <LoginInput label="Email" bind={emailBind} />
      <LoginInput label="Password" bind={passwordBind} />
      <button>Log in</button>
    </FormStyle>
  );
};

export default LoginForm;
