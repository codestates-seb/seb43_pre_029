import styled from 'styled-components';

const MyPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  /* width: 45rem; */
  width: 100%;
  padding: 2rem;
  margin-top: 2.8rem;

  background-color: #fff;
  .container {
    display: flex;

    h4 {
      margin-bottom: 0.6rem;
    }
  }
`;

const ProfileStyle = styled.div`
  display: flex;
  margin-bottom: 2.5rem;

  .infoStyle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    margin: 0;
    font-size: 2.5rem;
    font-weight: 300;
  }

  .userDate {
    display: flex;
    div {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      font-weight: 800;
    }
  }
`;

const ImageSample = styled.div`
  width: 5em;
  height: 5em;
  background-color: #000;

  margin-right: 0.8em;
`;

const StatsStyle = styled.div`
  width: 30%;
  margin-right: 1rem;
  flex-wrap: wrap;

  h4 {
    font-size: 2.5rem;
  }

  .contents {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */

    border: solid 0.1rem;
    padding: 0rem 1.1rem;

    .Block {
      display: flex;
      flex-direction: column;

      font-size: 2rem;

      h3 {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }

      p {
        margin: 0;
        margin-bottom: 2rem;
        font-size: 1.2rem;
      }
    }
    .Block:nth-child(odd) {
      margin-right: 1.5rem;
    }

    /* .Block:last-child {
      margin-bottom: -1rem;
    } */
    .second-column {
      .Block:last-child {
        margin-bottom: -1rem;
      }
    }
  }
`;

/** 2023/04/25 - UserInfo 스타일 - fe-HyungUk */
const UserInfoStyle = styled.div`
  width: 100%;

  h4 {
    font-size: 2.5rem;
  }

  .contents {
    display: flex;
    justify-content: center;

    border: solid 0.1rem;
    margin-bottom: 2rem;

    &.block {
      background-color: #f1f2f3;
    }
  }
`;

const InfoItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  position: relative;
`;

const ModalStyle = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  padding: 0;
  justify-content: center;
  display: flex;

  .modalBG {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }

  form {
    background-color: #fff;
    z-index: 1;
    padding: 2rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    display: flex;
    flex-direction: column;
    border: solid 0.1rem #000;

    width: 20rem;
    height: 2.5rem;
    margin-top: 0.5rem;
  }
  .input:not(:last-child) {
    margin-bottom: 2rem;
  }

  label {
    margin-bottom: 2rem;
  }

  button {
    width: 12rem;
    height: 2rem;
    border-radius: 1rem;
  }
`;

const ItemContainerStyle = styled.form`
  padding: 1.2rem;

  div:not(:last-child) {
    margin-bottom: 2rem;
  }
  > div:last-child {
    /* border: solid #000 1px; */
    margin-bottom: 0rem;
  }

  .none {
    display: none;
  }
`;

const ItemStyle = styled.div`
  /* margin-bottom: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: end;

  label {
    font-size: 1.8rem;
    align-self: flex-start;
  }

  .itemValue {
    display: flex;
    justify-content: end;
    font-size: 1.1rem;
    word-break: keep-all;
    text-align: end;

    margin-top: 0.8em;
    margin-bottom: 0.3em;

    padding-left: 3rem;

    &:hover {
      color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }
  }

  input.itemValue {
    border: solid 0.1em rgba(0, 0, 0, 0.4);
    width: 97%;
    height: 2.5rem;

    margin-top: 0.3em;
    margin-bottom: 0.8em;
    padding-left: 0;
    padding-right: 0.5rem;

    border-radius: 0.5rem;

    &:hover {
      color: #000;
      cursor: text;
    }
  }
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1em 1.2em;
  border-radius: 0.7em;

  width: 25rem;

  align-items: center;
  div {
    width: 100%;
  }

  > div:first-child {
    margin-bottom: 1rem;
  }
  input {
    width: 100%;
    height: 1.5rem;
    margin-right: 0.3rem;
    margin-top: 0.5rem;

    border: solid 0.05rem rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
    padding-left: 0.5rem;
  }

  button {
    width: 7rem;
    height: 2rem;
    background-color: rgba(156, 209, 250, 0.2);
    /* background-color: #fff; */

    border: solid 0.07em;
    border-radius: 0.5em;

    /* color: #fff; */
    color: rgba(0, 0, 0, 0.4);

    font-size: 0.9em;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: 0.3rem;
    padding-right: 0.5rem;
    .editIcon {
      width: 1.1rem;
      margin-right: 0.2rem;
    }
    :hover {
      cursor: pointer;
      border: 0.0625rem solid rgb(156, 209, 250);
      box-shadow: 0 0 0 0.15rem rgb(215, 229, 243);
    }
    &.disabled {
      background-color: rgba(244, 80, 80, 0.08);
      color: rgba(0, 0, 0, 0.4);
      border-color: rgba(244, 80, 80, 1);

      :hover {
        cursor: default;
        border-color: rgba(244, 80, 80, 1);
        box-shadow: none;
      }
    }
  }

  .pText {
    margin-top: 0.4rem;
    margin-bottom: 0.5rem;
    font-size: 0.01rem;

    p {
      letter-spacing: -0.02rem;
    }
  }
`;
const PassConfirmStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.4);
  height: 28.5rem;

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.3em;

    color: #000;
  }
`;

const UserConfigBtnStyle = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  position: absolute;
  top: 2rem;
  right: 2rem;

  button {
    width: 6.5rem;
    height: 2rem;
    font-size: 1rem;
    color: #000;
    border: solid 0.08em rgb(0, 0, 0);
    border-radius: 0.6rem;
    background-color: #fff;

    margin-left: 0.5rem;

    &.disabled {
      color: rgba(0, 0, 0, 0.3);
      border: solid 0.08em rgba(0, 0, 0, 0.3);
    }
  }
`;

export {
  MyPageStyle,
  StatsStyle,
  UserInfoStyle,
  UserForm,
  PassConfirmStyle,
  InfoItemsStyle,
  ProfileStyle,
  ImageSample,
  ItemContainerStyle,
  ItemStyle,
  UserConfigBtnStyle,
  ModalStyle,
};
