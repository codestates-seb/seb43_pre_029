import { useState } from 'react';

import { UserInfoStyle } from '../../style/MyPageStyle';
import InfoItems from './InfoItems';
import PassConfirm from './PassConfirm';

const UserInfoContainer = ({ isOverlay, disAbleBind }) => {
  const [isLogin, setIsLogin] = useState(true);
  const isBlock = !isLogin ? 'block' : '';

  return (
    <UserInfoStyle>
      <h4>User Info</h4>
      <div className={`contents ` + isBlock}>
        {isLogin ? (
          <InfoItems isOverlay={isOverlay} disAbleBind={disAbleBind} />
        ) : (
          <PassConfirm setIsLogin={setIsLogin} />
        )}
      </div>
    </UserInfoStyle>
  );
};

export default UserInfoContainer;
