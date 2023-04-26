import React from 'react';
import { BindArr1, BindArr2, BindArr3, BindArr4, WrapBind } from './FooterData';

import stackOverflow from '../../images/Logo/StackOverflow.png';
import {
  FooterContainer,
  FooterSection,
  FooterLinkList,
  FooterLink,
  FooterLogo,
  LogoImg,
  Wrapper,
} from '../style/FooterStyle';

/**
 * 2023/04/23 - FooterLink의 요소 생성 로직 - fe-hyungUk
 * @type {( text: string,link: string ) => JSX.Element}
 * @param {string} text 각 요소의 글자내용
 * @param {string} link 클릭시 이동할 링크의 주소
 */
const FooterLinkLogic = ({ text, link }) => <FooterLink href={link}>{text}</FooterLink>;

/**
 * 2023/04/23 - FooterLink의 ul 컴포넌트 - fe-hyungUk
 * @type {(BindArr: [string[],string[]]) => JSX.Element}
 * @param {BindArr} BindArr { textArr, linkArr }
 * @param {string[]} textArr 글자 내용 리스트
 * @param {string[]} linkArr 링크 주소 리스트
 */
const FooterListContainer = ({ BindArr }) => {
  const [textArr, linkArr] = BindArr;

  return (
    <FooterLinkList>
      {textArr.map((el, idx) => {
        return (
          <li key={idx}>
            <FooterLinkLogic text={el} link={linkArr[idx]} />
          </li>
        );
      })}
    </FooterLinkList>
  );
};

/**
 * 2023/04/23 - 따로 분리된 FooterLink 리스트  - fe-hyungUk
 * @type {(WrapArr: [string[], string[]]) => JSX.Element}
 * @param {WrapArr} WrapArr 글자 리스트와 링크 주소 리스트가 바인딩된 배열
 * @param {string[]} textArr 글자 내용 리스트
 * @param {string[]} linkArr 링크 주소 리스트
 */
const WrapContainer = ({ WrapArr }) => {
  const [textArr, linkArr] = WrapArr;

  return (
    <Wrapper>
      <div>
        {textArr.map((el, idx) => (
          <FooterLinkLogic text={el} link={linkArr[idx]} key={idx} />
        ))}
      </div>
      <div>
        <p>Site design / logo © 2023 Stack Exchange Inc; user</p>
        <p>
          contributions licensed under <u>CC BY-SA</u>.
        </p>
        <p>rev 2023.4.17.43393</p>
      </div>
    </Wrapper>
  );
};

/**
 * 2023/04/?? - Footer 컴포넌트 - fe-유현님
 */
function Footer() {
  /** 2023/04/23 - BindArr1~4 바인딩 배열 - fe-hyungUk */
  const BindArr = [BindArr1, BindArr2, BindArr3, BindArr4];
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLogo>
          <LogoImg src={stackOverflow} alt="Main Logo" />
        </FooterLogo>

        {BindArr.map((BindArr, idx) => (
          <FooterListContainer BindArr={BindArr} key={idx} />
        ))}
      </FooterSection>

      <WrapContainer WrapArr={WrapBind} />
    </FooterContainer>
  );
}

export default Footer;
