const Input = ({ label }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type={label === 'Password' ? 'password' : ''} />
    </div>
  );
};

export default Input;
