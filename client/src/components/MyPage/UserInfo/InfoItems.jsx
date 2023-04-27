import { useEffect, useState } from 'react';
import { InfoItemsStyle, ItemStyle, ModalStyle, ItemContainerStyle } from '../../style/MyPageStyle';
import { SignupInput } from '../../Input';
import useInput from '../../../logic/useInput';
import axios from 'axios';

const InfoItem = ({ data, editBind }) => {
  const { label, value, setValue } = data;
  const [isEdit, setIsEdit] = editBind;

  return (
    <ItemStyle>
      <label>{label}</label>
      {isEdit ? (
        <input className={`itemValue`} value={value} onChange={(e) => setValue(e.target.value)} />
      ) : (
        <div
          className={`itemValue`}
          onClick={() => {
            setIsEdit(true);
          }}
        >
          {value}
        </div>
      )}
    </ItemStyle>
  );
};

const modifySubmit = async (m_id, body, editBind) => {
  const [isEdit] = editBind;

  // try {
  //   const res = await axios.post(`/member/edit/${m_id}`, body);
  //   console.log(res);

  //   const newEdit = isEdit.map(() => false);
  //   setIsEdit(newEdit);
  // } catch (error) {
  //   console.log(error);
  // }
};

const InfoItemContainer = ({ totalData, editBind }) => {
  const { name, email, address, status_message, phone } = totalData;
  const m_id = localStorage.getItem('m_id');

  const [nameValue, setNameValue] = useState(name);
  const [status, setStatus] = useState(status_message);
  const [emailaddress, setEmailaddress] = useState(email);
  const [adPoint, setAdPoint] = useState(address);
  const [phoneNum, setPhoneNum] = useState(phone);
  const [body, setBody] = useState({
    name,
    address: adPoint,
    status_message: status,
    phone: phoneNum,
  });

  const bind = [
    { label: 'Name', value: nameValue, setValue: setNameValue, idx: 1 },
    { label: 'Status Message', value: status, setValue: setStatus, idx: 2 },
    { label: 'Email', value: emailaddress, setValue: setEmailaddress, idx: 3 },
    { label: 'Address', value: adPoint, setValue: setAdPoint, idx: 4 },
    { label: 'Phone Number', value: phoneNum, setValue: setPhoneNum, idx: 5 },
  ];
  const [isEdit, setIsEdit] = editBind;

  useEffect(() => {
    const newBody = {
      name,
      address: adPoint,
      status_message: status,
      phone: phoneNum,
    };

    setBody(newBody);
  }, [name, adPoint, status, phoneNum]);

  return (
    <ItemContainerStyle
      onSubmit={(e) => {
        e.preventDefault();
        modifySubmit(m_id, body, editBind);
        setIsEdit(false);
      }}
    >
      {bind.map((el) => (
        <InfoItem data={el} editBind={editBind} key={el.idx} />
      ))}
      {/* button에 submit 속성이 있는 듯 */}
      {isEdit && <button className="none" />}
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
        <SignupInput label="Current Password" bind={curPassBind} setValid={setCurPassValid} />
        <SignupInput label="New Password" bind={newPassBind} setValid={setNewPassValid} />
        <SignupInput label="New Password Confirm" bind={newPassConfirmBind} />
        <button disabled={isDisabled}>{isDisabled === 'disabled' ? '수정 중' : '수정 완료'}</button>
      </form>
    </ModalStyle>
  );
};

const InfoItems = ({ isOverlay, disAbleBind, totalData, editBind }) => {
  return (
    <InfoItemsStyle>
      {isOverlay && <Modal disAbleBind={disAbleBind} />}
      <InfoItemContainer totalData={totalData} editBind={editBind} />
    </InfoItemsStyle>
  );
};

export default InfoItems;
