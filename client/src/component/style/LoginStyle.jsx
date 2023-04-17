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

  padding: 1em;
  border-radius: 0.5em;

  .input {
    display: flex;
    flex-direction: column;

    margin-bottom: 1em;

    label {
      font-size: 0.8em;
      font-weight: 600;
      margin-bottom: 0.2em;
    }
    input {
      height: 1.5em;
      border: solid 0.03em rgba(0, 0, 0, 0.5);
      border-radius: 0.2em;
    }
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
