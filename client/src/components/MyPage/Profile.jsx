import { useState } from 'react';
import { ImageSample, ProfileStyle } from '../style/MyPageStyle';

const ProfileInfo = () => {
  const [status_message] = useState('부끄러웡');
  return (
    <div className="infoStyle">
      <h2>Adesti</h2>
      <div className="userDate">
        <div>{status_message}</div>
        {/* <div>Last seen this week</div>
        <div>Visitied 1 day</div> */}
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <ProfileStyle>
      <ImageSample />
      <ProfileInfo />
    </ProfileStyle>
  );
};

export default Profile;
