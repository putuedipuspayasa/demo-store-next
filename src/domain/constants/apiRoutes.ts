export const BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

export const API_ROUTES = {
  LOGIN_INQUIRY: `${BASE_URL}/db/v1/auth/inquiry`,
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  USER_PROFILE: `${BASE_URL}api/user/profile`,
  // Add other routes here
};
