import { PassConfirmStyle } from '../../style/MyPageStyle';
// import pencil from '../../../images';

const PassConfirm = () => {
  return (
    <PassConfirmStyle>
      <div className="UserForm">
        <label>Password</label>
        <div className="passInput">
          <input type="Password" />
          <button>Edit profile</button>
        </div>
        <div className="pText">
          <p>Passwords must contain at least eight characters, </p>
          <p>including at least 1 letter and 1 number.</p>
        </div>
      </div>
    </PassConfirmStyle>
  );
};

export default PassConfirm;
