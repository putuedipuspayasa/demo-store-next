import { BaseModel } from "./baseModel";

export interface User extends BaseModel {
  company_uid?: string;
  username: string;
  name: string;
  email: string;
  phone: string;
}
