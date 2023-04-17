import { LoginStyle, MainLogoStyle } from '../style/LoginStyle';
import FormContainer from './FormContainer';
import OAuthButton from './OAuthButton2';
import StackOverFlow from '../../image/StackOverflow.png';

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
      <FormContainer />
    </LoginStyle>
  );
};

export default Login;
