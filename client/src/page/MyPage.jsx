import { MyPageStyle } from '../component/style/MyPageStyle';
import StateContainer from '../component/MyPage/StateContainer';
import UserInfoContainer from '../component/MyPage/UserInfo/UserInfoContainer';
import Profile from '../component/MyPage/Profile';

function MyPage() {
  return (
    <MyPageStyle>
      <Profile />
      <div className="container">
        <StateContainer />
        <UserInfoContainer />
      </div>
    </MyPageStyle>
  );
}

export default MyPage;
