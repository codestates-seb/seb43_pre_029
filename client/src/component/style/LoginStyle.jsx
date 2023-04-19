import styled from 'styled-components';

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 12rem;

  .mainlogo {
    width: 3rem;
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

  margin-bottom: 1rem;

  button {
    width: 12rem;

    height: 1.5rem;
    border-radius: 0.3rem;
    border: none;

    font-size: 0.7rem;

    display: flex;

    justify-content: center;
    align-items: center;

    .logo {
      width: 0.8rem;
      margin: 0 0.3rem;
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
    margin-bottom: 0.2rem;
  }
`;

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;

  background: #fff;

  width: 10rem;
  padding: 1.1rem;
  border-radius: 0.5rem;

  .input {
    display: flex;
    flex-direction: column;

    margin-bottom: 1rem;

    label {
      font-size: 0.7rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
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
    font-size: 0.1rem;
    color: #6a737c;
    margin-bottom: 1rem;
  }
  button {
    height: 2rem;
    font-size: 0.5rem;
    background-color: #0a95ff;
    border: none;

    color: #ffffff;
  }
`;

export { LoginStyle, MainLogoStyle, OauthStyle, FormStyle };
