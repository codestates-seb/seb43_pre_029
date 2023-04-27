import { useNavigate } from 'react-router-dom';
import {
  SearchInputWrapper,
  IconStyle,
  Icon1,
  SearchInput,
  ProfileWrapper,
  Avatar,
  Num,
  NavIconStyle,
} from '../../style/Header/LoginFixSideHeaderstyle';
// } from '../style/LoginFixSideHeaderstyle';

const LoginHeaderForm = ({ searchvalueBind }) => {
  const [searchValue, setSearchValue] = searchvalueBind;
  return (
    <form>
      <SearchInputWrapper>
        <IconStyle>
          <Icon1 />
        </IconStyle>
        <SearchInput value={searchValue} onChange={setSearchValue} placeholder="Search..." />
      </SearchInputWrapper>
    </form>
  );
};

const ProfileContainer = () => {
  const navigate = useNavigate();
  const m_id = localStorage.getItem('m_id');

  return (
    <ProfileWrapper>
      <Avatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png"
        alt="User Avatar"
        onClick={() => navigate(`/mypage/${m_id}`)}
      />
      <Num>1</Num>
    </ProfileWrapper>
  );
};

const NavIconContainer = ({ Icon }) => <NavIconStyle>{Icon}</NavIconStyle>;

export { LoginHeaderForm, ProfileContainer, NavIconContainer };
