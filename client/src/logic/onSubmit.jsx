import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const signupSubmit = async (e, data, navigate) => {
  e.preventDefault();

  await axios
    .post(`${BASE_URL}/signup`, data)
    .then((res) => console.log(res.status))
    .then(navigate(`/login`))
    .catch((err) => console.log(err));
};

const loginSubmit = async (e, data, setAccessToken, setRefreshToken, setM_id) => {
  e.preventDefault();

  await axios
    .post(`${BASE_URL}/auth/login`, data)
    .then((res) => {
      setAccessToken(res.data['accessToken']);
      setRefreshToken(res.body['refresh_token']);
      setM_id(res.data['m_id']);
    })
    .catch((err) => console.log(err));
};

export { signupSubmit, loginSubmit };
