import StateContainer from '../components/MyPage/StateContainer';
import UserInfoContainer from '../components/MyPage/UserInfo/UserInfoContainer';
import Profile from '../components/MyPage/Profile';

import { MyPageStyle } from '../components/style/MyPageStyle';
import EntireStyle from '../components/style/EntireStyle';

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
