/** 2023/03/23 - 메인 로고 코드 스플릿 - fe-hyungUk */
import { MainLogoStyle } from '../style/LoginStyle';
import { StackOverFlow } from '../Import-Logo';
// import SVGIcon from '../../images/Sprite/SVGIcon';

const MainLogoContainer = () => {
  return (
    <MainLogoStyle>
      <img className="mainlogo" src={StackOverFlow} alt="StackOerFlow logo" />
      {/* <SVGIcon id="stackoverflow" width="5rem" height="5rem" /> */}
    </MainLogoStyle>
  );
};

export default MainLogoContainer;
