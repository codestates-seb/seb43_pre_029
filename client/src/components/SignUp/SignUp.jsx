import React from 'react';
import OAuthButton from '../Login/OAuthButton';
import SignUpForm from './SignUpForm';
import SignUpInfo from '../../images/SignUp.png';

import SignUpStyle from '../style/SignUpStyle';

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
