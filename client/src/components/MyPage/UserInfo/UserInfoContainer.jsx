import { useState } from 'react';

import { UserInfoStyle } from '../../style/MyPageStyle';
import InfoItems from './InfoItems';
import PassConfirm from './PassConfirm';

const UserInfoContainer = ({ isOverlay, disAbleBind, totalData, editBind }) => {
  const [isConfirm, setIsConfirm] = useState(true);
  const isBlock = !isConfirm ? 'block' : '';

  return (
    <UserInfoStyle>
      <h4>User Info</h4>
      <div className={`contents ` + isBlock}>
        {isConfirm ? (
          <InfoItems isOverlay={isOverlay} disAbleBind={disAbleBind} totalData={totalData} editBind={editBind} />
        ) : (
          <PassConfirm setIsConfirm={setIsConfirm} />
        )}
      </div>
    </UserInfoStyle>
  );
};

export default UserInfoContainer;
