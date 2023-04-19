import { useState } from 'react';
import { InfoItemsStyle } from '../../style/MyPageStyle';

const InfoItem = ({ label, value }) => {
  return (
    <div>
      <label>{label}</label>
      <div className="itemValue">{value}</div>
      <button>수정</button>
    </div>
  );
};

const InfoItems = () => {
  const [email, setEmail] = useState('user@gmail.com');
  const [address, setAddress] = useState(
    '서울특별시 관악구 남부순환로 1643 서울 관악우체국 3층 소포실 (신림동) 렉처노트',
  );

  return (
    <InfoItemsStyle>
      <InfoItem label={'Email'} value={email} />
      <InfoItem label={'Address'} value={address} />
    </InfoItemsStyle>
  );
};

export default InfoItems;
