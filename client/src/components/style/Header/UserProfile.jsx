import styled from 'styled-components';
import { BsFillInboxFill, IoIosTrophy, BsFillQuestionCircleFill, MdChatBubble } from '../../Icon';

// 유저 프로필
const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.05rem 1.125rem 0.05rem 0;

  &:hover {
    background-color: rgba(227, 230, 232, 0.61);
  }

  img {
    margin-top: 10px;
  }
`;

// 유저 프로필 옆 아이콘 4개
const NavIconStyle = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

const Icon2 = styled(BsFillInboxFill)`
  font-size: 1.3rem;
  color: rgb(82, 88, 96);
  padding: 0.75rem 0.5rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon3 = styled(IoIosTrophy)`
  font-size: 1.4rem;
  color: rgb(82, 88, 96);
  padding: 0.7rem 0.5rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon4 = styled(BsFillQuestionCircleFill)`
  font-size: 1rem;
  color: rgb(82, 88, 96);
  padding: 0.9rem 0.65rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon5 = styled(MdChatBubble)`
  font-size: 1.28rem;
  color: rgb(82, 88, 96);
  padding: 0.79rem 0.55rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Avatar = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 20%;
  margin: 0 0 0 0.625rem;
`;

const Num = styled.p`
  color: rgb(82, 88, 96);
  font-weight: 800;
  padding-top: 0.1875rem;
  font-size: 0.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { ProfileWrapper, NavIconStyle, Icon2, Icon3, Icon4, Icon5, Avatar, Num };
