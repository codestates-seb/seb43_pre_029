import { useEffect } from 'react';

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

const SignUpInput = ({ label, bind, setValid }) => {
  const { value, onChange } = bind;

  useEffect(() => {
    testExp(label, value, setValid);
  }, [label, value, setValid]);

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
    <div className="input">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} type={isPassword} />
    </div>
  );
};

/**
 * 2023/03/18 - 로그인 입력창 - fe-hyungUk
 * @param label : 입력 창의 종류 설명
 * @param bind : 상태관리 묶음(value, setValue)
 * @type { {label: 'Email' | 'Password', bind: { value, onChange }} }
 */
const LoginInput = ({ label, bind }) => {
  const { value, onChange } = bind;

  return (
    <div className="input">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} type={label === 'Password' ? 'password' : ''} />
    </div>
  );
};

export { SignUpInput, LoginInput };
