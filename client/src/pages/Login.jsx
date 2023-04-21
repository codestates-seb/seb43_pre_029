import LoginForm from '../components/Login/LoginForm';
import OAuthButton from '../components/Login/OAuthButton';
import { StackOverFlow } from '../components/Import-Logo';
import EntireStyle from '../components/style/EntireStyle';
import { LoginStyle, MainLogoStyle } from '../components/style/LoginStyle';

import ModalSideHeader from '../components/Header/ModalSideHeader';

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
      <ModalSideHeader />
      <LoginStyle>
        <MainLogoContainer />
        <OAuthButton />
        <LoginForm />
      </LoginStyle>
    </EntireStyle>
  );
};

export default Login;
