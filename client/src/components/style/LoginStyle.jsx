import styled from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 22rem;

  .mainlogo {
    width: 5rem;
  }
`;

const MainLogoStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const OauthStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-bottom: 1rem;

  button {
    height: 2rem;
    width: 100%;

    border-radius: 0.3rem;
    border: none;

    font-size: 1rem;

    display: flex;

    justify-content: center;
    align-items: center;

    .logo {
      width: 1rem;
      margin: 0 0.3rem 0 0;
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
    margin-bottom: 0.5rem;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  background: #fff;

  width: 20rem;

  padding: 1.1rem;
  border-radius: 0.5rem;

  .input {
    display: flex;
    flex-direction: column;

    margin-bottom: 2.2rem;

    label {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.6rem;
    }
    input {
      height: 2rem;
      border: solid 0.03rem rgba(0, 0, 0, 0.5);
      border-radius: 0.2rem;
    }
  }
  .input:nth-child(3) {
    margin-bottom: 0.1rem;
  }

  p {
    font-size: 0.5rem;
    color: #6a737c;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }
  button {
    height: 2rem;
    font-size: 1rem;
    background-color: #0a95ff;
    border: none;
    border-radius: 0.2rem;

    color: #ffffff;
  }
`;

export { LoginStyle, MainLogoStyle, OauthStyle, FormStyle };
