import { OauthStyle } from './style/LoginStyle';
import { Google, Facebook, Github } from '../image/LoginLogo';

const OAuthButton = () => {
  return (
    <OauthStyle>
      <button>
        <img className="logo" src={Google} alt="google logo" />
        <span>Log in with Google</span>
      </button>
      <button>
        <img className="logo" src={Github} alt="github logo" />
        <span>Log in with Github</span>
      </button>
      <button>
        <img className="logo" src={Facebook} alt="facebook logo" />
        <span>Log in with Facebook</span>
      </button>
    </OauthStyle>
  );
};

export default OAuthButton;
