import { PassConfirmStyle, UserForm } from '../../style/MyPageStyle';
import pencil from '../../../images/Icon/pencil.png';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { LoginInput } from '../../Input';
import useInput from '../../../logic/useInput';

const useValidTest = (emailBind, passwordBind, setDisabled) => {
  const [emailValid, setEmailValid] = useState(false);
  const [passValid, setPassValid] = useState(false);

  const EmailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  useEffect(() => {
    EmailExp.test(emailBind.value) ? setEmailValid(true) : setEmailValid(false);
    passwordRegExp.test(passwordBind.value) ? setPassValid(true) : setPassValid(false);

    if (emailValid && passValid) return setDisabled('');
    return setDisabled('disabled');
  }, [emailBind.value, passwordBind.value, emailValid, passValid]);
};

const PassConfirm = ({ setIsConfirm }) => {
  const emailBind = useInput();
  const passwordBind = useInput();

  const [isCorrect, setIsCorrect] = useState('initial');
  const [disabled, setDisabled] = useState('disabled');

  useValidTest(emailBind, passwordBind, setDisabled);

  const UserConfirm = async (email, password) => {
    try {
      await axios.post('/member/check-password', { email, password });
      setIsConfirm(true);
    } catch (error) {
      setIsCorrect(error.message);
    }
  };

  return (
    <PassConfirmStyle>
      <UserForm
        onSubmit={(e) => {
          e.preventDefault();
          UserConfirm(emailBind.value, passwordBind.value);
        }}
      >
        <LoginInput label="Email" bind={emailBind} />
        <LoginInput label="Password" bind={passwordBind} />

        <div className="pText">
          <p>{isCorrect === 'initial' ? '' : { isCorrect }}</p>
        </div>

        <button className={disabled} disabled={disabled}>
          {/* <button disabled={''}> */}
          <img className="editIcon" src={pencil} alt="pencil" />
          Edit profile
        </button>
      </UserForm>
    </PassConfirmStyle>
  );
};

export default PassConfirm;
