import { API_ROUTES } from "@/domain/constants/apiRoutes";
import { Login } from "@/domain/models/auth";
import axiosInstance from "@/utils/axiosConfig";
import { handleApiError } from "@/utils/handleApiError";
import { handleAxiosError } from "@/utils/handleAxiosError";
import axios from "axios";
import { LoginRequest } from "../requests/loginRequest";

export const authRepository = {
  login: async (req: LoginRequest): Promise<Login> => {
    try {
      const response = await axiosInstance.post<Login>(API_ROUTES.LOGIN, req);
      return response.data;
    } catch (error: any) {
      handleAxiosError(error);
      throw new Error(handleApiError(error));
    }
  },

  // Example: Fetch user profile
  fetchUserProfile: async (token: string) => {
    const response = await axios.get(API_ROUTES.USER_PROFILE, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
