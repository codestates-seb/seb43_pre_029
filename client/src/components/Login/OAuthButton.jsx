import { OauthStyle } from '../style/LoginStyle';
import { Google, Facebook, GitHub } from '../Import-Logo';

const OneButton = ({ domain }) => {
  const domainName = (domain) => {
    if (domain === Google) return 'Google';
    if (domain === Facebook) return 'Facebook';
    if (domain === GitHub) return 'GitHub';
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
      <OneButton domain={GitHub} />
      <OneButton domain={Facebook} />
    </OauthStyle>
  );
};

export default OAuthButton;
