import LoginForm from '../components/Login/LoginForm';
import OAuthButton from '../components/Login/OAuthButton';
import { StackOverFlow } from '../components/Import-Logo';
import EntireStyle from '../components/style/EntireStyle';
import { LoginStyle, MainLogoStyle } from '../components/style/LoginStyle';

import SideHeader from '../components/Header/SideHeader';

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
      <SideHeader />
      <LoginStyle>
        <MainLogoContainer />
        <OAuthButton />
        <LoginForm />
      </LoginStyle>
    </EntireStyle>
  );
};

export default Login;
