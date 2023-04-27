import { UserConfigBtnStyle } from '../style/MyPageStyle';
import { memberDelete, passwordModify } from '../../logic/myPageLogic';

/** 2023/04/25 - 비밀번호 수정, 회원 탈퇴 버튼 - fe-hyungUk
 * @type {(isDisabled:bool)=>JSX.Element}
 * @param {function} setIsOverlay isOverlay의 세터함수
 */
const ModifyUserDisable = ({ setIsOverlay, setIsEdit }) => {
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
      <button onClick={() => setIsEdit(true)}>회원정보 수정</button>
      <button
        onClick={(e) => {
          e.preventDefault();
          memberDelete();
        }}
      >
        회원탈퇴
      </button>
    </>
  );
};

/** 2023/04/25 - 취소, 수정 완료 버튼 - fe-hyungUk
 * @type {(setIsOverlay:function, isDisabled:bool)=>JSX.Element}
 * @param {function} setIsOverlay isOverlay의 세터함수
 * @param {boolean} isDisabled 입력 값에 의한 수정 가능 조건식 확인
 */
const ModifyUserEnable = ({ setIsOverlay, isDisabled }) => {
  return (
    <>
      <button
        onClick={() => {
          setIsOverlay(false);
        }}
      >
        취소
      </button>
      <button
        className={isDisabled}
        disabled={isDisabled}
        onClick={(e) => {
          e.preventDefault();
          passwordModify();
        }}
      >
        {isDisabled === 'disabled' ? '수정 중' : '수정 완료'}
      </button>
    </>
  );
};

/** 2023/04/26 - 회원정보 수정, 회원 탈퇴 버튼 - fe-hyungUk */
const ModifyUserEdit = ({ setIsEdit }) => {
  return (
    <>
      <button onClick={() => setIsEdit(false)}>취소</button>
      <button onClick={() => memberDelete()}>회원탈퇴</button>
    </>
  );
};

/**
 * 2023/04/25 - 마이페이지 우상단 버튼 - fe-hyungUk
 * @type {(isOverlay:bool,setIsOverlay:function, isDisabled:bool)=>JSX.Element}
 * @param {boolean} isOverlay 비밀번호 수정 클릭에 의한 모달창 활셩화 여부
 * @param {function} setIsOverlay isOverlay의 세터함수
 * @param {boolean} isDisabled 입력 값에 의한 수정 가능 조건식 확인
 */
const UserConfigBtn = ({ isOverlay, setIsOverlay, isDisabled, editBind }) => {
  const [isEdit, setIsEdit] = editBind;

  return (
    <UserConfigBtnStyle>
      {isOverlay ? (
        <ModifyUserEnable setIsOverlay={setIsOverlay} isDisabled={isDisabled} />
      ) : isEdit ? (
        <ModifyUserEdit setIsEdit={setIsEdit} />
      ) : (
        <ModifyUserDisable setIsOverlay={setIsOverlay} setIsEdit={setIsEdit} />
      )}
      ƒ
    </UserConfigBtnStyle>
  );
};

export default UserConfigBtn;
