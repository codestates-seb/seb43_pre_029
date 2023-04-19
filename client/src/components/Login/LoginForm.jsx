import { FormStyle } from '../style/LoginStyle';
import Input from '../Input';

const LoginForm = () => {
  return (
    <FormStyle>
      <Input label="Email" />
      <Input label="Password" />
      <button>Log in</button>
    </FormStyle>
  );
};

export default LoginForm;
