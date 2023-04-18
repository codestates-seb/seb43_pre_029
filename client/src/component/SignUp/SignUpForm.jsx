import { FormStyle } from '../style/LoginStyle';
import Input from '../Input';

const SignUpForm = () => {
  return (
    <FormStyle>
      <Input label="Display Name" />
      <Input label="Email" />
      <Input label="Password" />
      <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
      <Input label="Address" />
      <button>Log in</button>
    </FormStyle>
  );
};

export default SignUpForm;
