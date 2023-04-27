import useInput from './useInput';

const useBind = () => {
  const nameBind = useInput();
  const emailBind = useInput();
  const passwordBind = useInput();
  const addressBind = useInput();
  const PhoneBind = useInput();

  return { nameBind, emailBind, passwordBind, addressBind, PhoneBind };
};

export default useBind;
