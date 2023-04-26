import { FormStyle } from '../style/LoginStyle';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { signupSubmit } from '../../logic/onSubmit';
import useBind from '../../logic/useBind';
import { SignupInput } from '../Input';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { nameBind, emailBind, passwordBind, addressBind, PhoneBind } = useBind();

  const data = {
    name: nameBind.value,
    email: emailBind.value,
    password: passwordBind.value,
    address: addressBind.value,
    phone: PhoneBind.value,
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
      <SignupInput label="Display Name" bind={nameBind} />
      <SignupInput label="Email" bind={emailBind} setValid={setEmailValid} />
      <SignupInput label="Password" bind={passwordBind} setValid={setPasswordValid} />
      <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      <SignupInput label="Address" bind={addressBind} />
      <SignupInput label="Phone Number" bind={PhoneBind} />
      <button className={isDisabled} disabled={isDisabled}>
        Sign Up
      </button>
    </FormStyle>
  );
};

export default SignUpForm;
