import { useEffect, useState } from "react";

export const useValidator = (validateFn: InputValidator) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<InputError | null>(null);

  const changeValue = (updatedValue: string) => {
    setValue(updatedValue);
  };
  const changeErrror = (message: string) => {
    setError({
      message,
    });
  };
  useEffect(() => {
    setError(validateFn(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return { changeValue, value, error, changeErrror };
};
