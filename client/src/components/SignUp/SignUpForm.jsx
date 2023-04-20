import { FormStyle } from '../style/LoginStyle';
import useInput from '../../logic/useInput';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import onSubmit from './onSubmit';
import Input from '../Input';

const SignUpForm = () => {
  const nameBind = useInput();
  const emailBind = useInput();
  const passwordBind = useInput();
  const addressBind = useInput();

  const navigate = useNavigate();

  const data = {
    name: nameBind.value,
    email: emailBind.value,
    password: passwordBind.value,
    address: addressBind.value,
  };

  const [isDisabled, setIsDisabled] = useState('disabled');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    if (emailValid && passwordValid) return setIsDisabled('');
    setIsDisabled('disabled');
  }, [emailValid, passwordValid]);

  return (
    <FormStyle onSubmit={(e) => onSubmit(e, data, navigate)}>
      <Input label="Display Name" bind={nameBind} />
      <Input label="Email" bind={emailBind} setValid={setEmailValid} />
      <Input label="Password" bind={passwordBind} setValid={setPasswordValid} />
      <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      <Input label="Address" bind={addressBind} />
      <button className={isDisabled} disabled={isDisabled}>
        Log in
      </button>
    </FormStyle>
  );
};

export default SignUpForm;
