// src/modules/auth/utils/validationUtils.ts

export interface ValidationErrors {
  email?: string;
  password?: string;
}

export const validateLoginForm = (
  email: string,
  password: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!email.trim()) {
    errors.email = "Email is required";
  }
  if (!password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};
