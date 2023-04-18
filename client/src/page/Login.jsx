import { LoginStyle, MainLogoStyle } from '../component/style/LoginStyle';
import LoginForm from '../component/Login/LoginForm';
import OAuthButton from '../component/Login/OAuthButton';
import { StackOverFlow } from '../component/Import-Logo';

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
      <div className="SignUp">
        <p>Don't have an account?</p>
        <a href="">Sign Up</a>
      </div>
    </LoginStyle>
  );
};

export default Login;
