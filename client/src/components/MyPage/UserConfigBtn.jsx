import { UserConfigBtnStyle } from '../style/MyPageStyle';

const ModifyUserDisable = ({ setIsOverlay }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOverlay(true);
        }}
      >
        비밀번호 수정
      </button>
      <button>회원탈퇴</button>
    </>
  );
};

const ModifyUserEnable = ({ setIsOverlay, isDisabled }) => {
  return (
    <>
      <button className={isDisabled} disabled={isDisabled}>
        {isDisabled === 'disabled' ? '수정 중' : '수정 완료'}
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOverlay(false);
        }}
      >
        취소
      </button>
    </>
  );
};
const UserConfigBtn = ({ isOverlay, setIsOverlay, isDisabled }) => {
  return (
    <UserConfigBtnStyle>
      {isOverlay ? (
        <ModifyUserEnable setIsOverlay={setIsOverlay} isDisabled={isDisabled} />
      ) : (
        <ModifyUserDisable setIsOverlay={setIsOverlay} />
      )}
    </UserConfigBtnStyle>
  );
};

export default UserConfigBtn;
