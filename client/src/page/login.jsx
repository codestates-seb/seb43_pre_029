import { LoginStyle, MainLogoStyle } from '../style/LoginStyle';
import LoginForm from './LoginForm';
import OAuthButton from './OAuthButton';
import { StackOverFlow } from '../Import-Logo';

const MainLogoContainer = () => {
  return (
    <MainLogoStyle>
      <img className="mainlogo" src={StackOverFlow} alt="StackOerFlow logo" />
    </MainLogoStyle>
  );
};

const Login = () => {
  return (
    <LoginStyle>
      <MainLogoContainer />
      <OAuthButton />
      <LoginForm />
    </LoginStyle>
  );
};

export default Login;
