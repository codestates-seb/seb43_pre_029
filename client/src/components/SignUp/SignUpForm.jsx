import { FormStyle } from '../style/LoginStyle';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import { signupSubmit } from '../../logic/onSubmit';
import { SignUpInput } from '../Input';
import useBind from '../../logic/useBind';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { nameBind, emailBind, passwordBind, addressBind } = useBind();

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
    <FormStyle onSubmit={(e) => signupSubmit(e, data, navigate)}>
      <SignUpInput label="Display Name" bind={nameBind} />
      <SignUpInput label="Email" bind={emailBind} setValid={setEmailValid} />
      <SignUpInput label="Password" bind={passwordBind} setValid={setPasswordValid} />
      <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      <SignUpInput label="Address" bind={addressBind} />
      <button className={isDisabled} disabled={isDisabled}>
        Log in
      </button>
    </FormStyle>
  );
};

export default SignUpForm;
