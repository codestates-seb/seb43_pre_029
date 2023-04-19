import { ImageSample, ProfileStyle } from '../style/MyPageStyle';

const ProfileInfo = () => {
  return (
    <div className="infoStyle">
      <h2>Adesti</h2>
      <div className="userDate">
        <div>Member since today</div>
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
