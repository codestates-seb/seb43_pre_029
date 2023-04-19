import { useState } from 'react';
import styled from 'styled-components';

import { UserInfoStyle } from '../../style/MyPageStyle';
import InfoItems from './InfoItems';
import PassConfirm from './PassConfirm';

const UserInfoContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const isBlock = !isLogin ? 'block' : '';

  return (
    <UserInfoStyle>
      <h4>User Info</h4>
      <div className={`contents ` + isBlock}>
        {
          isLogin ? <InfoItems /> : <PassConfirm /> //
        }
      </div>
    </UserInfoStyle>
  );
};

export default UserInfoContainer;
