import LoginForm from '../components/Login/LoginForm';
import OAuthButton from '../components/Login/OAuthButton';
import { StackOverFlow } from '../components/Import-Logo';
import EntireStyle from '../components/style/EntireStyle';
import { LoginStyle, MainLogoStyle } from '../components/style/LoginStyle';

import ModalSideHeader from '../components/Header/Modal/ModalSideHeader';

/** 2023/03/18 - 로그인/회원가입 로고 - fe-hyungUk */
const MainLogoContainer = () => {
  return (
    <MainLogoStyle>
      <img className="mainlogo" src={StackOverFlow} alt="StackOerFlow logo" />
    </MainLogoStyle>
  );
};

/** 2023/03/17 - 로그인 페이지 - fe-hyungUk */
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
