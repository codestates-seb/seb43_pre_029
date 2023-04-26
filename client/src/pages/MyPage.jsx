import StateContainer from '../components/MyPage/StateContainer';
import UserInfoContainer from '../components/MyPage/UserInfo/UserInfoContainer';
import Profile from '../components/MyPage/Profile';
import Footer from '../components/Footer/Footer';
import LoginFixSideHeader from '../components/Header/Fix/LoginFixSideHeader';

import { MyPageStyle } from '../components/style/MyPageStyle';
import EntireStyle from '../components/style/EntireStyle';
import UserConfigBtn from '../components/MyPage/UserConfigBtn';

import { useEffect, useState } from 'react';
import axios from 'axios';

function MyPage() {
  // useEffect(() => {
  //   axios
  //     .get(`/member/${m_id}`)
  //     .then((res) => {
  //       setTotalData(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [m_id]);

  const [isOverlay, setIsOverlay] = useState(false);
  const [isDisabled, setIsDisabled] = useState('disabled');
  const editBind = useState(false);

  /**
   * 2023/04/25 - disabled 상태 바인뎅 - fe-hyungUk
   * @type {{isDisabled:'disabled' | '',setIsDisabled:function}}
   * @param {'disabled' | ''} isDisabled 비밀번호 수정 클릭에 의한 모달창 활셩화 여부
   * @param {function} setIsDisabled isOverlay의 세터함수
   * */
  const disAbleBind = { isDisabled, setIsDisabled };

  const [totalData, setTotalData] = useState({
    email: 'user@gmail.com',
    name: 'eunhee',
    address: '서울특별시 관악구 남부순환로 1643 서울 관악우체국 3층 소포실 (신림동) 렉처노트',
    status_message: '부끄러웡',
    phone: '010-0000-0000',
    activity_count: 6,
    question_count: 1,
    comment_count: 3,
    answer_count: 2,
  });

  return (
    <EntireStyle>
      {/* <LoginFixSideHeader /> */}
      <MyPageStyle>
        <UserConfigBtn isOverlay={isOverlay} setIsOverlay={setIsOverlay} isDisabled={isDisabled} editBind={editBind} />
        <Profile totalData={totalData} />
        <div className="container">
          <StateContainer totalData={totalData} />
          <UserInfoContainer
            isOverlay={isOverlay}
            disAbleBind={disAbleBind}
            totalData={totalData}
            editBind={editBind}
          />
        </div>
      </MyPageStyle>
      {/* <Footer /> */}
    </EntireStyle>
  );
}

export default MyPage;
