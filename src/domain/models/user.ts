import { BaseModel } from "./baseModel";

export interface User extends BaseModel {
  name: string;
  email: string;
  phone: string;
}
