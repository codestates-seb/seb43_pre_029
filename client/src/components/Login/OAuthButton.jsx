import { OauthStyle } from '../style/LoginStyle';
import { Google, Facebook, GitHub } from '../Import-Logo';
import { useState } from 'react';
import { useEffect } from 'react';

import SVGIcon from '../../images/Sprite/SVGIcon';

/**
 * 2023/03/17 - OAuth로그인의 개별 버튼  - fe-hyungUk
 * @param {domain} domain 도메인을 설명하는 문자열
 * @type {'Google' | 'Facebook' | 'GitHub'}
 */
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
      {/* <SVGIcon id={domain} width="1rem" /> */}
      <span>{`Log in with ${domainName}`}</span>
    </button>
  );
};

/** 2023/03/17 - OAuth 방식의 로그인 버튼 묶음  - fe-hyungUk */
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
