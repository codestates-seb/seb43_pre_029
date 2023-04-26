import { ImageSample, ProfileStyle } from '../style/MyPageStyle';

const ProfileInfo = ({ totalData }) => {
  const { name, status_message } = totalData;

  return (
    <div className="infoStyle">
      <h2>{name}</h2>
      <div className="userDate">
        <div>{status_message}</div>
      </div>
    </div>
  );
};

const Profile = ({ totalData }) => {
  return (
    <ProfileStyle>
      <ImageSample />
      <ProfileInfo totalData={totalData} />
    </ProfileStyle>
  );
};

export default Profile;
