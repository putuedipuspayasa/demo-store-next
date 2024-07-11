export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirm?: string;
  create_company?: boolean;
}
