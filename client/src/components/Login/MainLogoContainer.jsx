/** 2023/03/23 - 메인 로고 코드 스플릿 - fe-hyungUk */
import StackOverFlow from '../../images/Logo/StackOverflow.png';
import { MainLogoStyle } from '../style/LoginStyle';

const MainLogoContainer = () => {
  return (
    <MainLogoStyle>
      <img className="mainlogo" src={StackOverFlow} alt="StackOerFlow logo" />
    </MainLogoStyle>
  );
};

export default MainLogoContainer;
