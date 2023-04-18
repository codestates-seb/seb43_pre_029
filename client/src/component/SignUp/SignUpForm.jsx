import { FormStyle } from '../style/LoginStyle';
import Input from '../Input';

const SignUpForm = () => {
  return (
    <FormStyle>
      <Input label="Display Name" />
      <Input label="Email" />
      <Input label="Password" />
      <button>Log in</button>
    </FormStyle>
  );
};

export default SignUpForm;
