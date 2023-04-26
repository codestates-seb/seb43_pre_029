import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormStyle } from '../style/LoginStyle';
import useBind from '../../logic/useBind';
import { loginSubmit } from '../../logic/onSubmit';

import { LoginInput } from '../Input';

/** 2023/03/17 - 로그인시 이메일 패스워드 입력창 - fe-hyungUk */
const LoginForm = () => {
  const navigate = useNavigate();
  const { emailBind, passwordBind } = useBind();
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [m_id, setM_id] = useState('');

  useEffect(() => {
    if (accessToken !== '' && accessToken !== undefined) {
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('refresh_token', refreshToken);
      localStorage.setItem('m_id', m_id);
      navigate('/');
    }
  }, [accessToken, refreshToken, m_id]);

  const data = {
    email: emailBind.value,
    password: passwordBind.value,
  };

  return (
    <FormStyle onSubmit={(e) => loginSubmit(e, data, setAccessToken, setRefreshToken, setM_id)}>
      <LoginInput label="Email" bind={emailBind} />
      <LoginInput label="Password" bind={passwordBind} />
      <button>Log in</button>
    </FormStyle>
  );
};

export default LoginForm;
