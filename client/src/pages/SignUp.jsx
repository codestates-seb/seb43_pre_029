import React from 'react';
import EntireStyle from '../components/style/EntireStyle';
import { SignUpStyle } from '../components/style/SignUpStyle';

import OAuthButton from '../components/Login/OAuthButton';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpInfo from '../images/SignUp.png';
<<<<<<< HEAD
=======

import { SignUpStyle } from '../components/style/SignUpStyle';
import EntireStyle from '../components/style/EntireStyle';
>>>>>>> f14897a134facf7d80ab11c97dd4448f793b3132

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
