import { useState } from 'react';
import { HamburgerContainer, LogoContainer, SearchForms, MemberButton } from './ModalSideHeaderComp';
import { HeaderContainer } from '../../style/Header/ModalSideHeaderStyle';

function ModalSideHeader({ isOpen, searchBind }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <HeaderContainer>
      <HamburgerContainer onToggle={onToggle} open={open} />
      <LogoContainer />
      <SearchForms searchBind={searchBind} />
      <MemberButton />
    </HeaderContainer>
  );
}

export default ModalSideHeader;
