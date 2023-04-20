import { OauthStyle } from '../style/LoginStyle';
import { Google, Facebook, GitHub } from '../Import-Logo';
import { useState } from 'react';
import { useEffect } from 'react';

const OneButton = ({ domain }) => {
  const [domainName, setDomainName] = useState('');

  useEffect(() => {
    setDomain(domain);
  }, [domain]);

  const setDomain = (domain) => {
    if (domain === Google) setDomainName('Google');
    if (domain === Facebook) setDomainName('Facebook');
    if (domain === GitHub) setDomainName('GitHub');
  };

  return (
    <button>
      <img className="logo" src={domain} alt={`${domainName} logo`} />
      <span>{`Log in with ${domainName}`}</span>
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
