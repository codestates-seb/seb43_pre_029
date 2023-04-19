import LoginForm from '../components/Login/LoginForm';
import OAuthButton from '../components/Login/OAuthButton';
import { StackOverFlow } from '../components/Import-Logo';

import { LoginStyle, MainLogoStyle } from '../components/style/LoginStyle';
import EntireStyle from '../components/style/EntireStyle';

const MainLogoContainer = () => {
  return (
    <MainLogoStyle>
      <img className="mainlogo" src={StackOverFlow} alt="StackOerFlow logo" />
    </MainLogoStyle>
  );
};

const Login = () => {
  return (
    <EntireStyle>
      <LoginStyle>
        <MainLogoContainer />
        <OAuthButton />
        <LoginForm />
      </LoginStyle>
    </EntireStyle>
  );
};

export default Login;
