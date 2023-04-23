import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(35, 38, 41);
  color: rgb(186, 191, 196);
  padding: 1.875rem 17.5rem;
  display: flex;
  justify-content: space-around;
  bottom: -2rem;
  width: 100%;
  /* height: 21.25rem; */
  box-sizing: border-box;
  z-index: 999;
  position: relative;
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

export { FooterContainer, FooterSection, FooterLinkList, FooterLink, FooterLogo, LogoImg, Wrapper };
