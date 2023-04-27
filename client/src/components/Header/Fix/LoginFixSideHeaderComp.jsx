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

const LoginHeaderForm = () => {
  return (
    <form>
      <SearchInputWrapper>
        <IconStyle>
          <Icon1 />
        </IconStyle>
        <SearchInput type="text" placeholder="Search..." />
      </SearchInputWrapper>
    </form>
  );
};

const ProfileContainer = () => {
  return (
    <ProfileWrapper>
      <Avatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png"
        alt="User Avatar"
      />
      <Num>1</Num>
    </ProfileWrapper>
  );
};

const NavIconContainer = ({ Icon }) => <NavIconStyle>{Icon}</NavIconStyle>;

export { LoginHeaderForm, ProfileContainer, NavIconContainer };
