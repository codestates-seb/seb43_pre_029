import { useNavigate } from 'react-router-dom';
import {
  SearchInputForm,
  IconStyle,
  Icon1,
  SearchInput,
  ProfileWrapper,
  Avatar,
  Num,
  NavIconStyle,
} from '../../style/Header/LoginFixSideHeaderstyle';

const LoginHeaderForm = ({ searchvalueBind, isSearchBind }) => {
  const [searchValue, setSearchValue] = searchvalueBind;
  const [isSearched, setIsSearched] = isSearchBind;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSearched(true);
      }}
    >
      <SearchInputForm>
        <IconStyle>
          <Icon1 />
        </IconStyle>
        <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
      </SearchInputForm>
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
