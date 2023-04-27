import EntireStyle from '../components/style/EntireStyle';
import { SignUpStyle } from '../components/style/SignUpStyle';
import OAuthButton from '../components/Login/OAuthButton';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpInfo from '../images/SignUp.png';

import ModalSideHeader from '../components/Header/Modal/ModalSideHeader';

function SignUp({ searchvalueBind }) {
  return (
    <EntireStyle>
      <ModalSideHeader searchvalueBind={searchvalueBind} />
      <SignUpStyle>
        <div>
          <img className="SignUpInfo" src={SignUpInfo} alt="SignUpInfo" />
        </div>
        <div className="SignUpForm">
          <OAuthButton />
          <SignUpForm />
        </div>
      </SignUpStyle>
    </EntireStyle>
  );
}

export default SignUp;
