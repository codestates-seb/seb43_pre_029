import StateContainer from '../components/MyPage/StateContainer';
import UserInfoContainer from '../components/MyPage/UserInfo/UserInfoContainer';
import Profile from '../components/MyPage/Profile';
import Footer from '../components/Footer/Footer';
import LoginFixSideHeader from '../components/Header/Fix/LoginFixSideHeader';

import { MyPageStyle } from '../components/style/MyPageStyle';
import EntireStyle from '../components/style/EntireStyle';
import UserConfigBtn from '../components/MyPage/UserConfigBtn';

import { useState } from 'react';

function MyPage({ m_id }) {
  console.log('m_id: ', m_id);

  const [isOverlay, setIsOverlay] = useState(false);
  const [isDisabled, setIsDisabled] = useState('disabled');

  const disAbleBind = { isDisabled, setIsDisabled };

  return (
    <EntireStyle>
      {/* <LoginFixSideHeader /> */}
      <MyPageStyle>
        <UserConfigBtn isOverlay={isOverlay} setIsOverlay={setIsOverlay} isDisabled={isDisabled} />
        <Profile />
        <div className="container">
          <StateContainer />
          <UserInfoContainer isOverlay={isOverlay} disAbleBind={disAbleBind} />
        </div>
      </MyPageStyle>
      {/* <Footer /> */}
    </EntireStyle>
  );
}

export default MyPage;
