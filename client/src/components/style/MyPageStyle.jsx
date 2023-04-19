import styled from 'styled-components';

const MyPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

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
    font-size: 3rem;
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
  width: 15%;
  margin-right: 1rem;

  h4 {
    font-size: 2.5rem;
  }

  .contents {
    display: flex;
    flex-wrap: wrap;

    border: solid 0.1rem;
    padding: 1.1rem;

    .Block {
      display: flex;
      flex-direction: column;

      font-size: 2rem;

      h3 {
        margin-bottom: 0.5rem;
      }

      p {
        margin: 0;
        margin-bottom: 2rem;
        font-size: 1.2rem;
      }
    }
    .Block:nth-child(odd) {
      margin-right: 2rem;
    }
    .Block:last-child {
      margin-bottom: -2rem;
    }
  }
`;

const UserInfoStyle = styled.div`
  width: 100%;

  h4 {
    font-size: 2.5rem;
  }

  .contents {
    display: flex;
    justify-content: center;

    border: solid 0.1em;
    height: 16.5em;

    padding: 0.5em;

    &.block {
      background-color: #f1f2f3;
    }
  }
`;

const InfoItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0.8rem;

  > div {
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
    align-items: end;
  }

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

    margin-top: 1.1em;
    margin-bottom: 0.3em;
  }

  button {
    font-size: 0.9rem;
    background-color: #fff;

    border: solid 0.1em rgba(0, 0, 0, 0.4);
    border-radius: 0.3em;
    color: rgba(0, 0, 0, 0.4);
  }
`;

const PassConfirmStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.4);

  label {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.3em;

    color: #000;
  }

  .UserForm {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 0.4em 0.8em;
    border-radius: 0.7em;

    .passInput {
      display: flex;
      align-items: center;
    }
  }

  input {
    width: 13rem;
    height: 1.5rem;
    margin-right: 0.3em;

    border: solid 0.05em rgba(0, 0, 0, 0.4);
    border-radius: 0.2em;
  }

  button {
    height: 1.7rem;
    background-color: #fff;
    border: solid 0.2em;
    border-radius: 0.9em;

    color: rgba(0, 0, 0, 0.4);

    font-size: 0.2em;
  }

  .pText {
    margin-top: 0.4rem;
    font-size: 0.01rem;

    p {
      letter-spacing: -0.02rem;
    }
  }
`;

export { MyPageStyle, StatsStyle, UserInfoStyle, PassConfirmStyle, InfoItemsStyle, ProfileStyle, ImageSample };
