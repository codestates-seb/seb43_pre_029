import { useEffect, useState } from 'react';
import { InfoItemsStyle, ItemStyle, UserConfigBtnStyle, ModalStyle, ItemContainerStyle } from '../../style/MyPageStyle';
import { SignUpInput } from '../../Input';
import useInput from '../../../logic/useInput';

const InfoItem = ({ label, value, setValue }) => {
  // const [isEdit, setIsEdit] = useState(true);
  const [isEdit, setIsEdit] = useState(false);

  const onSubmit = () => {
    console.log(1);
  };
  return (
    <ItemStyle>
      <label>{label}</label>
      {isEdit ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            setIsEdit(false);
          }}
        >
          <input className={`itemValue`} value={value} onChange={(e) => setValue(e.target.value)} />
        </form>
      ) : (
        <div className={`itemValue`} onClick={() => setIsEdit(true)}>
          {value}
        </div>
      )}
    </ItemStyle>
  );
};

const InfoItemContainer = () => {
  const [status, setStatus] = useState('부끄러웡');
  const [email, setEmail] = useState('user@gmail.com');
  const [address, setAddress] = useState(
    '서울특별시 관악구 남부순환로 1643 서울 관악우체국 3층 소포실 (신림동) 렉처노트',
  );
  const [phone, setPhone] = useState('010-0000-0000');

  return (
    <ItemContainerStyle>
      <InfoItem label={'Status Message'} value={status} setValue={setStatus} />
      <InfoItem label={'Email'} value={email} setValue={setEmail} />
      <InfoItem label={'Address'} value={address} setValue={setAddress} />
      <InfoItem label={'Phone Number'} value={phone} setValue={setPhone} />
    </ItemContainerStyle>
  );
};

const Modal = ({ disAbleBind }) => {
  const { isDisabled, setIsDisabled } = disAbleBind;

  const curPassBind = useInput();
  const newPassBind = useInput();
  const newPassConfirmBind = useInput();

  const [curPassValid, setCurPassValid] = useState(false);
  const [newPassValid, setNewPassValid] = useState(false);

  useEffect(() => {
    if (newPassBind.value !== newPassConfirmBind.value) return;

    if (curPassValid && newPassValid) return setIsDisabled('');
    setIsDisabled('disabled');
  }, [curPassValid, newPassValid, newPassBind.value, newPassConfirmBind.value, setIsDisabled]);

  return (
    <ModalStyle>
      <div className="modalBG" />
      <form>
        <SignUpInput label="Current Password" bind={curPassBind} setValid={setCurPassValid} />
        <SignUpInput label="New Password" bind={newPassBind} setValid={setNewPassValid} />
        <SignUpInput label="New Password Confirm" bind={newPassConfirmBind} />
        <button disabled={isDisabled}>{isDisabled === 'disabled' ? '수정 중' : '수정 완료'}</button>
      </form>
    </ModalStyle>
  );
};

const InfoItems = ({ isOverlay, disAbleBind }) => {
  return (
    <InfoItemsStyle>
      {isOverlay && <Modal disAbleBind={disAbleBind} />}
      <InfoItemContainer />
    </InfoItemsStyle>
  );
};

export default InfoItems;
