import { authRepository } from "../repositories/authRepository";
import { RegisterRequest } from "../requests/registerRequest";

export const registerService = {
  register: async (req: RegisterRequest) => {
    return await authRepository.register(req);
  },
};
