import { FormStyle } from '../style/LoginStyle';

const Input = ({ label }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type={label === 'Password' && 'password'} />
    </div>
  );
};

const FormContainer = () => {
  return (
    <FormStyle>
      <Input label="Email" />
      <Input label="Password" />
      <button>Log in</button>
    </FormStyle>
  );
};

export default FormContainer;
