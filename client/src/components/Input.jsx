import { useEffect } from 'react';
import styled from 'styled-components';

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2.2rem;

  label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }
  input {
    height: 2rem;
    border: solid 0.03rem rgba(0, 0, 0, 0.5);
    border-radius: 0.2rem;

    padding-left: 0.3rem;

    &:focus {
      outline: none;

      border: 0.0625rem solid rgb(156, 209, 250);
      box-shadow: 0 0 0 0.25rem rgb(215, 229, 243);
    }
  }
`;

/**
 * 2023/03/25 - 로그인 입력창 - fe-hyungUk
 * @param label : 입력 창의 종류 설명
 * @param bind : 상태관리 묶음(value, setValue)
 * @type { {label: 'Email' | 'Password', bind: { value, onChange }} }
 */
const LoginInput = ({ label, bind }) => {
  const { value, onChange } = bind;

  let isPassword = '';
  switch (label) {
    case 'Password':
    case 'Current Password':
    case 'New Password':
      isPassword = 'password';
      break;

    default:
      isPassword = '';
  }
  return (
    <InputStyle>
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} type={isPassword} />
    </InputStyle>
  );
};

const testExp = (label, value, setValid) => {
  const EmailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validTest = (RegExp) => (RegExp ? setValid(true) : setValid(false));

  switch (label) {
    case 'Email':
      return validTest(EmailExp.test(value));

    case 'Password':
    case 'Current Password':
    case 'New Password':
      return validTest(passwordRegExp.test(value));

    default:
      return;
  }
};

/**
 * 2023/03/25 - 회원가입 입력 창 - fe-hyungUk
 * @param label : 입력 창의 종류 설명
 * @param bind : 상태관리 묶음(value, setValue)
 * @param setValid : 유효성 검사할 타입(세터 함수)
 * @type { {label: 'Email' | 'Password', bind: { value, onChange }, setValid: Function} }
 */
const SignupInput = ({ label, bind, setValid }) => {
  useEffect(() => {
    if (setValid) testExp(label, bind.value, setValid);
  }, [label, bind, setValid]);

  return <LoginInput label={label} bind={bind} />;
};

export { SignupInput, LoginInput };
