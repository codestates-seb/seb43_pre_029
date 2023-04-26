import axios from 'axios';
const m_id = localStorage.getItem('m_id');

const memberDelete = async () => {
  try {
    const res = await axios.delete(`/member/%=${m_id}`);
    return console.log(res.status);
  } catch (err) {
    return console.log(err);
  }
};

const passwordModify = async () => {
  try {
    const res = await axios.post(`/member/edit/%=${m_id}`);
    return console.log(res);
  } catch (error) {
    return console.log(error);
  }
};

export { memberDelete, passwordModify };
