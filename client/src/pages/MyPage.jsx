import { Profile, StateContainer, UserConfigBtn, UserInfoContainer } from '../components/MyPage/MyPageBind';

import Footer from '../components/Footer/Footer';
import LoginFixSideHeader from '../components/Header/Fix/LoginFixSideHeader';

import { MyPageStyle } from '../components/style/MyPageStyle';
import EntireStyle from '../components/style/EntireStyle';

import { useEffect, useState } from 'react';
import axios from 'axios';

function MyPage({ m_id, searchvalueBind, isSearchBind }) {
  useEffect(() => {
    axios
      .get(`/member/${m_id}`)
      .then((res) => {
        setTotalData(res.data);
      })
      .catch((err) => console.log(err));
  }, [m_id]);

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
    email: '',
    name: '',
    address: '',
    status_message: '',
    phone: '',
    activityCount: 0,
    questionCount: 0,
    commentCount: 0,
    answerCount: 0,
  });

  return (
    <EntireStyle>
      <LoginFixSideHeader searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />
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
