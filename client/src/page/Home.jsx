import Contnent from '../component/Content';
import QuestionsList from '../component/QuestionsList';
import styled from 'styled-components';

const HomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90wh;
`;
const Home = () => {
  return (
    <HomeTemplate>
      <Contnent />
      <QuestionsList />
    </HomeTemplate>
  );
};

export default Home;
