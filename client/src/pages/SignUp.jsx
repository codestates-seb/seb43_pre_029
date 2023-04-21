import React from 'react';
import EntireStyle from '../components/style/EntireStyle';
import { SignUpStyle } from '../components/style/SignUpStyle';
import OAuthButton from '../components/Login/OAuthButton';
import SignUpForm from '../components/SignUp/SignUpForm';
import SignUpInfo from '../images/SignUp.png';

import SideHeader from '../components/Header/SideHeader';

function SignUp() {
  return (
    <EntireStyle>
      <SideHeader />
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
