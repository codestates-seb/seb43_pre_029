import { useEffect } from 'react';

const testExp = (label, value, setValid) => {
  const EmailExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const validTest = (RegExp) => (RegExp ? setValid(true) : setValid(false));
  if (label === 'Email') validTest(EmailExp.test(value));
  if (label === 'Password') validTest(passwordRegExp.test(value));
};

const Input = ({ label, bind, setValid }) => {
  const { value, onChange } = bind;

  useEffect(() => {
    testExp(label, value, setValid);
  }, [label, value, setValid]);

  return (
    <div className="input">
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e)} type={label === 'Password' ? 'password' : ''} />
    </div>
  );
};

export default Input;
