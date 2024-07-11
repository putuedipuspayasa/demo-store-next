export interface ValidationErrorLogin {
  email?: string;
  password?: string;
}

export const validateLoginForm = (
  email: string,
  password: string
): ValidationErrorLogin => {
  const errors: ValidationErrorLogin = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  }
  if (!password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};
