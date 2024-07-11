import { RegisterRequest } from "../requests/registerRequest";

export interface ValidationErrorRegister {
  name?: string;
  phone?: string;
  email?: string;
  password?: string;
  passwordConfirm?: string;
}

export const validateRegisterForm = (
  req: RegisterRequest
): ValidationErrorRegister => {
  const errors: ValidationErrorRegister = {};

  if (!req.name.trim()) {
    errors.name = "Name is required";
  }

  if (!req.phone.trim()) {
    errors.phone = "Phone is required";
  }

  if (!req.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.email)) {
      errors.email = "Invalid email format";
    }
  }

  if (!req.password.trim()) {
    errors.password = "Password is required";
  }

  if (!req.password_confirm) {
    errors.passwordConfirm = "Password confirmation is required";
  } else if (req.password_confirm != req.password) {
    errors.passwordConfirm = "Password confirmation doesn't match";
  }

  return errors;
};
