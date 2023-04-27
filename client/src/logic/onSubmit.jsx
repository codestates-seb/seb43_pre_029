import axios from 'axios';

const signupSubmit = async (e, data, navigate) => {
  e.preventDefault();

  await axios
    .post(`/member`, data)
    // .post(`/member`, data)
    // .then(navigate(`/login`))
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => console.log(err));
};

const loginSubmit = async (e, data, setAccessToken, setRefreshToken, setM_id) => {
  e.preventDefault();

  console.log(data);

  await axios
    .post(`/auth/login`, data)
    .then((res) => {
      console.log('res.status: ', res.status);
      console.log('res: ', res);

      let BearerToken = res.headers.get('Authorization');
      setAccessToken(BearerToken);

      let RefreshToken = res.headers.get('Refresh');
      setRefreshToken(RefreshToken);

      let m_id = res.headers.get('m_id');
      setM_id(m_id);
    })
    .catch((err) => console.log(err));
};

export { signupSubmit, loginSubmit };
