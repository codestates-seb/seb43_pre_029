import useInput from './useInput';

const useBind = () => {
  const nameBind = useInput();
  const emailBind = useInput();
  const passwordBind = useInput();
  const addressBind = useInput();

  return { nameBind, emailBind, passwordBind, addressBind };
};

export default useBind;
