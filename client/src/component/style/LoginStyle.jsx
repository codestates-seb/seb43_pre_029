import styled from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 12em;

  .mainlogo {
    width: 3em;
  }
`;

const MainLogoStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
`;

const OauthStyle = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1em;

  button {
    width: 17.5em;

    height: 1.8em;
    border-radius: 0.3em;
    border: none;

    font-size: 0.7em;

    display: flex;

    justify-content: center;
    align-items: center;

    .logo {
      width: 1em;
      margin: 0 0.3em;
    }

    :nth-child(1) {
      background-color: #ffffff;
    }
    :nth-child(2) {
      background-color: #2f3337;
      color: #ffffff;
    }
    :nth-child(3) {
      background-color: #385499;
      color: #ffffff;
    }
  }

  button:not(:last-child) {
    margin-bottom: 0.3em;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  background: #fff;

  width: 10em;
  padding: 1.1em;
  border-radius: 0.5em;

  .input {
    display: flex;
    flex-direction: column;

    margin-bottom: 1em;

    label {
      font-size: 0.7em;
      font-weight: 600;
      margin-bottom: 0.5em;
    }
    input {
      height: 2.5em;
      border: solid 0.03em rgba(0, 0, 0, 0.5);
      border-radius: 0.2em;
    }
  }
  .input:nth-child(3) {
    margin-bottom: 0.1em;
  }

  p {
    font-size: 0.1em;
    color: #6a737c;
    margin-bottom: 8em;
  }
  button {
    height: 4em;
    font-size: 0.5em;
    background-color: #0a95ff;
    border: none;

    color: #ffffff;
  }
`;

export { LoginStyle, MainLogoStyle, OauthStyle, FormStyle };
