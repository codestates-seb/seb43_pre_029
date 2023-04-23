import OAuthButton from '../Login/OAuthButton';
import SignUpForm from './SignUpForm';
import SignUpInfo from '../../images/SignUp.png';

import SignUpStyle from '../style/SignUpStyle';

/** 2023/03/18 - 회원가입시 이메일 패스워드 입력창 - fe-hyungUk */
function SignUp() {
  return (
    <SignUpStyle>
      <div>
        <img className="SignUpInfo" src={SignUpInfo} alt="SignUpInfo" />
      </div>
      <div className="SignUpForm">
        <OAuthButton />
        <SignUpForm />
      </div>
    </SignUpStyle>
  );
}

export default SignUp;
