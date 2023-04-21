import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const signupSubmit = (e, data, navigate) => {
  e.preventDefault();

  axios
    .post(`${BASE_URL}/signup`, data)
    .then((res) => console.log(res.status))
    .then(navigate(`/login`))
    .catch((err) => console.log(err));
};

const loginSubmit = async (e, data, setAccessToken, setRefreshToken) => {
  e.preventDefault();

  await axios
    .post(`${BASE_URL}/auth/login`, data)
    .then((res) => {
      setAccessToken(res.data['accessToken']);
      setRefreshToken(res.body['refresh_token']);
    })
    .catch((err) => console.log(err));
};

export { signupSubmit, loginSubmit };
