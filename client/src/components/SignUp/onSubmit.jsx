import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

const onSubmit = (e, data, navigate) => {
  e.preventDefault();

  axios
    .post(`${BASE_URL}/auth/signup`, data)
    .then((res) => console.log(res.status))
    .then(navigate(`/login`))
    .catch((err) => console.log(err));
};

export default onSubmit;
