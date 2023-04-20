import React from 'react';
import OAuthButton from '../components/Login/OAuthButton';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpInfo from '../images/SignUp.png';

import { SignUpStyle } from '../components/style/SignUpStyle';
import EntireStyle from '../components/style/EntireStyle';

function SignUp() {
  return (
    <EntireStyle>
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
