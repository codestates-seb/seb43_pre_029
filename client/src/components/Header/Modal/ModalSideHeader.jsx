import { useState } from 'react';
import { HamburgerContainer, LogoContainer, SearchForm, MemberButton } from './ModalSideHeaderComp';
import { HeaderContainer } from '../../style/Header/ModalSideHeaderStyle';

function ModalSideHeader({ isOpen }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <HeaderContainer>
      <HamburgerContainer onToggle={onToggle} open={open} />
      <LogoContainer />
      <SearchForm />
      <MemberButton />
    </HeaderContainer>
  );
}

export default ModalSideHeader;
