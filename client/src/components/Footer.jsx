import React from 'react';
import styled from 'styled-components';
import stackOverflow from '../images/StackOverflow.png';

const FooterContainer = styled.footer`
  background-color: rgb(35, 38, 41);
  color: rgb(186, 191, 196);
  padding: 1.875rem 17.5rem;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 21.25rem;
  box-sizing: border-box;
`;

const FooterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterLinkList = styled.ul`
  list-style: none;
  font-size: 0.8125rem;

  li:first-child {
    font-weight: bold;
    margin-bottom: 1.25rem;
  }

  li {
    margin-bottom: 0.625rem;
  }
`;

const FooterLink = styled.a`
  color: rgb(186, 191, 196);
  text-decoration: none;
  padding: 0.625rem;

`;

const FooterLogo = styled.a``;

const LogoImg = styled.img`
  height: 3.3125rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.25rem 0;
  font-size: 0.6875rem;

  p {
    margin: 0.1875rem 0 0 0.625rem;
  }
  p:first-child {
    margin-top: 1.875rem;
  }
`;


function Footer() {
  return (
    <FooterContainer>
        <FooterSection>
          <div>
            <FooterLogo>
              <LogoImg src={stackOverflow} alt="Main Logo" />
            </FooterLogo>
          </div>
          <div>
            <FooterLinkList>
              <li>
                <FooterLink href="#">STACK OVERFLOW</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Questions</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Help</FooterLink>
              </li>
            </FooterLinkList>
          </div>
          <div>
            <FooterLinkList>
              <li>
                <FooterLink href="#">PRODUCTS</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Teams</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Advertising</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Collectives</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Talent</FooterLink>
              </li>
            </FooterLinkList>
          </div>
          <div>
            <FooterLinkList>
              <li>
                <FooterLink href="#">COMPANY</FooterLink>
              </li>
              <li>
                <FooterLink href="#">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Press</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Work Here</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Legal</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contact Us</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Cookie Settings</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Cookie Policy</FooterLink>
              </li>
            </FooterLinkList>
          </div>
          <div>
            <FooterLinkList>
              <li>
                <FooterLink href="#">STACK EXCHANGE NETWORK</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Technology</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Culture & recreation</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Life & arts</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Science</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Professional</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Business</FooterLink>
              </li>
              <li>&nbsp;</li>
              <li>
                <FooterLink href="#">API</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Data</FooterLink>
              </li>
            </FooterLinkList>
          </div>
        </FooterSection>
        <Wrapper>
          <div>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
          </div>
          <div>
            <p>Site design / logo © 2023 Stack Exchange Inc; user</p>
            <p>
              contributions licensed under <u>CC BY-SA</u>.
            </p>
            <p>rev 2023.4.17.43393</p>
          </div>
        </Wrapper>
    </FooterContainer>
  );
}

export default Footer;
