import styled from 'styled-components';
import homeimg from '../images/home_img.png';
import Contnent from '../components/Home/Content';
import QuestionsList from '../components/Home/QuestionsList';
import FixSideHeader from '../components/Header/Fix/FixSideHeader';
import ModalSideHeader from '../components/Header/Modal/ModalSideHeader';
// import LoginFixSideHeader from '../components/Header/Fix/LoginFixSideHeader'
// import LoginModalSideHeader from '../components/Header/Modal/LoginModalSideHeader'
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import SearchList from '../components/Home/SearchList';

const HomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* position: fixed; */
  margin-top: 2.8125rem;
  margin-left: 16rem;
  /* overflow-y: scroll; */

  /* height: 150vh; */
`;

const Imgstyle = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    padding-top: 2.8125rem;
    /* width: 100%; */
    height: 73vh;
  }

  margin-top: -2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home({ isLogin }) {
  const searchvalueBind = useState('');
  const isSearchBind = useState(false);
  const [isSearched, setIsSearched] = isSearchBind;

  return (
    <>
      {!isLogin ? (
        <>
          <FixSideHeader searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />
          <Wrapper>
            <HomeTemplate>
              <Contnent />
              {isSearched ? <SearchList searchvalueBind={searchvalueBind} /> : <QuestionsList />}
            </HomeTemplate>
            <Footer />
          </Wrapper>
        </>
      ) : (
        <>
          <ModalSideHeader searchvalueBind={searchvalueBind} />
          <Imgstyle>
            <img src={homeimg} alt="" />
          </Imgstyle>
          <Footer />
        </>
      )}
    </>
  );
}
