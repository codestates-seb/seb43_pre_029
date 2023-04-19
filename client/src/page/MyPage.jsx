import StateContainer from '../component/MyPage/StateContainer';
import UserInfoContainer from '../component/MyPage/UserInfo/UserInfoContainer';
import Profile from '../component/MyPage/Profile';

import { MyPageStyle } from '../component/style/MyPageStyle';
import EntireStyle from '../component/style/EntireStyle';

function MyPage() {
  return (
    <EntireStyle>
      <MyPageStyle>
        <Profile />
        <div className="container">
          <StateContainer />
          <UserInfoContainer />
        </div>
      </MyPageStyle>
    </EntireStyle>
  );
}

export default MyPage;
