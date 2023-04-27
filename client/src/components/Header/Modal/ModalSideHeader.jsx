import { useState } from 'react';
import { HamburgerContainer, LogoContainer, SearchContainer, MemberButton } from './ModalSideHeaderComp';
import { HeaderContainer } from '../../style/Header/ModalSideHeaderStyle';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalSideHeader({ searchvalueBind }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);
  const navigate = useNavigate();

  useEffect(() => {
    const [searchvalue] = searchvalueBind;

    if (searchvalue !== '') {
      navigate('/');
    }
  }, [searchvalueBind]);
  return (
    <HeaderContainer>
      <HamburgerContainer onToggle={onToggle} open={open} />
      <LogoContainer />
      <SearchContainer searchvalueBind={searchvalueBind} />
      <MemberButton />
    </HeaderContainer>
  );
}

export default ModalSideHeader;
