import { PassConfirmStyle, UserForm } from '../../style/MyPageStyle';
import pencil from '../../../images/Icon/pencil.png';
import axios from 'axios';
import { useState } from 'react';

const PassConfirm = ({ setIsLogin }) => {
  const [password, setPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState('initial');

  const UserConfirm = () => {
    axios
      .get('/member/check-password', { password })
      .then(() => {
        setIsLogin(true);
        setPassword('');
      })
      .catch((err) => setIsCorrect(err.message));
  };

  return (
    <PassConfirmStyle>
      <UserForm
        onClick={(e) => {
          e.target.prevent();
          UserConfirm(password, setPassword, setIsLogin, setIsCorrect);
        }}
      >
        <label>Password</label>
        <div className="passInput">
          <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button>
            <img className="editIcon" src={pencil} alt="pencil" />
            Edit profile
          </button>
        </div>
        <div className="pText">
          {isCorrect === 'initial' ? (
            <p>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>
          ) : (
            <p>{isCorrect}</p>
          )}
        </div>
      </UserForm>
    </PassConfirmStyle>
  );
};

export default PassConfirm;
