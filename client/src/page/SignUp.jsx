import React from 'react';
import OAuthButton from '../component/Login/OAuthButton';
import SignUpForm from '../component/SignUp/SignUpForm';
import SignUpInfo from '../image/SignUp.png';

import { SignUpStyle } from '../component/style/SignUpStyle';
import EntireStyle from '../component/style/EntireStyle';

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
