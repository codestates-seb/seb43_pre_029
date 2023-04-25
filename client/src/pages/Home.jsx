import styled from 'styled-components';
import homeimg from '../images/home_img.png';
import Contnent from '../components/Home/Content';
import QuestionsList from '../components/Home/QuestionsList';
import FixSideHeader from '../components/Header/Fix/FixSideHeader';
import ModalSideHeader from '../components/Header/Modal/ModalSideHeader';
import Footer from '../components/Footer/Footer';

const HomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  position: fixed;
  margin-top: 2.8125rem;
  margin-left: 16rem;
  overflow: scroll;

  height: 150vh;

  &::after {
    content: '';
    height: 20rem;
  }
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

export default function Home({ isLogin }) {
  return (
    <>
      {!isLogin ? (
        <>
          <FixSideHeader />
          <HomeTemplate>
            <Contnent />
            <QuestionsList />
          </HomeTemplate>
        </>
      ) : (
        <>
          <ModalSideHeader />
          <Imgstyle>
            <img src={homeimg} alt="" />
          </Imgstyle>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
}
