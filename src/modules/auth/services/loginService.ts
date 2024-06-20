import { authRepository } from "../repositories/authRepository";
import { LoginRequest } from "../requests/loginRequest";

export const authService = {
  login: async (req: LoginRequest) => {
    return await authRepository.login(req);
  },

  // Example: Fetch user profile
  fetchUserProfile: async (token: string) => {
    return await authRepository.fetchUserProfile(token);
  },
};
