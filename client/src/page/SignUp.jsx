import React from 'react';
import OAuthButton from '../component/Login/OAuthButton';
import SignUpForm from '../component/SignUp/SignUpForm';
import SignUpInfo from '../image/SignUp.png';

import { SignUpStyle } from '../component/style/SignUpStyle';

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
