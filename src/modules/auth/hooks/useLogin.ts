// src/modules/auth/hooks/useLogin.ts
import useSWR from "swr";
import { authService } from "../services/loginService";

const fetcher = (url: string, email: string, password: string) =>
  authService.login(email, password);

export const useLogin = (email: string, password: string) => {
  const { data, error, mutate } = useSWR(
    email && password ? ["/login", email, password] : null,
    fetcher,
    { revalidateOnFocus: false, shouldRetryOnError: false }
  );

  return {
    data,
    error,
    login: () => mutate(),
  };
};
