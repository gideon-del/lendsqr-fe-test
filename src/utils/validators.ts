export const validateEmail: InputValidator = (email) => {
  const trimedValue = email.trim();
  if (!trimedValue.length) {
    return { message: "Field is required" };
  }
  if (!trimedValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return { message: "Invalid email" };
  }
  return null;
};

export const validatePassword: InputValidator = (password) => {
  const trimedPassword = password.trim();
  if (!trimedPassword.length) {
    return { message: "Field is required" };
  }
  if (trimedPassword.length < 8) {
    return { message: "Password must be more than 8 characters" };
  }
  return null;
};
