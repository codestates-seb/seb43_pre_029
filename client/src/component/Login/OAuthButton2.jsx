import { OauthStyle } from '../style/LoginStyle';
import { Google, Facebook, Github } from '../../image/LoginLogo';

const OneButton = ({ domain }) => {
  const domainName = (domain) => {
    if (domain === Google) return 'Google';
    if (domain === Facebook) return 'Facebook';
    if (domain === Github) return 'Github';
  };

  return (
    <button>
      <img className="logo" src={domain} alt={`${domainName} logo`} />
      <span>Log in with {domainName}</span>
    </button>
  );
};

const OAuthButton = () => {
  return (
    <OauthStyle>
      <OneButton domain={Google} />
      <OneButton domain={Github} />
      <OneButton domain={Facebook} />
    </OauthStyle>
  );
};

export default OAuthButton;
