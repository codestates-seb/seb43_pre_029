import LoginForm from '../component/Login/LoginForm';
import OAuthButton from '../component/Login/OAuthButton';
import { StackOverFlow } from '../component/Import-Logo';

import { LoginStyle, MainLogoStyle } from '../component/style/LoginStyle';
import EntireStyle from '../component/style/EntireStyle';

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
