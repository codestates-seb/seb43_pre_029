import styled from 'styled-components';

const MyPageStyle = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 0.7em;

  background-color: #fff;
  .container {
    display: flex;

    h4 {
      margin-bottom: 0.6em;
    }
  }
`;

const StatsStyle = styled.div`
  width: 15%;
  margin-right: 1em;

  .contents {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */

    border: solid 0.05em;
    padding: 0.5em;

    .Block {
      display: flex;
      flex-direction: column;

      font-size: 1em;

      h3 {
        margin: 0;
        margin-bottom: 0.3em;
      }

      p {
        margin: 0;
        margin-bottom: 1em;
        font-size: 0.7em;
      }
    }
    .Block:nth-child(odd) {
      margin-right: 2em;
    }
  }
`;

const UserInfoStyle = styled.div`
  width: 100%;

  .contents {
    display: flex;
    justify-content: center;

    border: solid 0.05em;
    height: 10em;

    padding: 0.5em;

    &.block {
      background-color: #f1f2f3;
    }
  }
`;

const PassConfirmStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.4);

  label {
    font-size: 0.6em;
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
    width: 13em;
    height: 1.7em;
    margin-right: 0.3em;

    border: solid 0.05em rgba(0, 0, 0, 0.4);
    border-radius: 0.2em;
  }

  button {
    height: 6.5em;
    background-color: #fff;
    border: solid 0.2em;
    border-radius: 0.9em;

    color: rgba(0, 0, 0, 0.4);

    font-size: 0.2em;
  }

  .pText {
    margin-top: 0.2rem;
    font-size: 0.01rem;

    p {
      letter-spacing: -0.02rem;
    }
  }
`;

const ProfileStyle = styled.div`
  display: flex;

  .infoStyle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h2 {
    margin: 0;
    font-size: 1.8em;
    font-weight: 300;
  }

  .userDate {
    display: flex;
    div {
      margin-right: 0.5em;
      font-size: 0.7em;
    }
  }
`;

const imagesSample = styled.div`
  width: 5em;
  height: 5em;
  background-color: #000;

  margin-right: 0.8em;
`;

const InfoItemsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 0.3em;

  > div {
    margin-bottom: 1em;

    display: flex;
    flex-direction: column;
    align-items: end;
  }

  label {
    font-size: 1.1em;
    align-self: flex-start;
  }

  .itemValue {
    display: flex;
    justify-content: end;
    font-size: 0.65em;
    word-break: keep-all;
    text-align: end;

    margin-top: 1.1em;
    margin-bottom: 0.3em;
  }

  button {
    font-size: 0.3em;
    background-color: #fff;

    border: solid 0.1em rgba(0, 0, 0, 0.4);
    border-radius: 0.3em;
    color: rgba(0, 0, 0, 0.4);
  }
`;
export { MyPageStyle, StatsStyle, UserInfoStyle, PassConfirmStyle, InfoItemsStyle, ProfileStyle, imagesSample };
