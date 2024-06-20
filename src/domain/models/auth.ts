import { User } from "./user";

export interface Login {
  token: string;
  type: string;
  expire: string;
  user: User;
}
